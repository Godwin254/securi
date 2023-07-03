const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');


class AuthService {
  //fields

  constructor() {
    this.secretKey = process.env.SECRET_KEY;
    this.usersCollection = db.collection('users');
  }

  async registerUser(firstname, lastname, email, phone,estateId, role, password) {
    const querySnapshot = await this.usersCollection
      .where('email', '==', email)
      .get();

    if (!querySnapshot.empty) throw new Error('Email is already registered!');

    const hashedPassword = await this.#hashpassword(password)

    const userRef = this.usersCollection.doc();

    const user = {
      uid: userRef.id,
      firstname,
      lastname,
      email,
      phone,
      role,
      password: hashedPassword,
      dateadded: new Date().toDateString(),
      deleted: false,
      referenceType: "owner"
    };
    if (estateId) user.estateId = estateId;

    await userRef.set(user);
    return {
      uid: user.uid, 
      firstname: user.firstname, 
      role: user.role, 
      estateId: user.estateId
    };
  }
  //hash password utility
  async #hashpassword (password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  async loginUser(email, password) {
    const querySnapshot = await this.usersCollection.where('email', '==', email).get();

    if (querySnapshot.empty) throw new Error('User does not exist!');
    
    const {uid, firstname, lastname, role, password:pwd} =  querySnapshot.docs[0].data();
    const doc = querySnapshot.docs[0].data();
    const estateId =  doc.hasOwnProperty("estateId") ? doc.estateId : uid;
    const isMatch = await bcrypt.compare(password, pwd);
    if (!isMatch) throw new Error('Invalid password!');

    const token = jwt.sign({ userId: querySnapshot.docs[0].id }, this.secretKey, { expiresIn: '1h' });
    return { uid, firstname, lastname, role, token, estateId };
  }

  async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      const userDoc = await this.usersCollection.doc(decoded.userId).get();
      const user = userDoc.data();

      if (!user) throw new Error('Invalid token');
      
      return user;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}

module.exports = AuthService;
