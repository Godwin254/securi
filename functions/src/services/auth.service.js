const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');


class AuthService {
  constructor(secretKey) {
    this.secretKey = secretKey;
    this.usersCollection = db.collection('users');
  }

  async registerUser(firstname, lastname, email, role, password) {
    const querySnapshot = await this.usersCollection.where('email', '==', email).get();
    if (!querySnapshot.empty) {
      throw new Error('Email is already registered');
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userRef = this.usersCollection.doc();
    const user = {
      userId: userRef.id,
      firstname,
      lastname,
      role,
      email,
      password: hashedPassword,
      createdAt: new Date().toDateString()
    };

    await userRef.set(user);
    return user;
  }

  async loginUser(email, password) {
    const querySnapshot = await this.usersCollection.where('email', '==', email).get();
    if (querySnapshot.empty) {
      throw new Error('Invalid email or password');
    }

    const userDoc = querySnapshot.docs[0];
    const user = userDoc.data();

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ userId: user.id }, this.secretKey, { expiresIn: '1h' });
    return { user, token };
  }

  async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      const userDoc = await this.usersCollection.doc(decoded.id).get();
      const user = userDoc.data();
      if (!user) {
        throw new Error('Invalid token');
      }
      return user;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}

module.exports = AuthService;
