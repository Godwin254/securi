const db = require('../config/db');
const users = db.collection('users');
const admin = require('firebase-admin');

/* //Should be handled from the client side
exports.login = async (req, res) => {

      //firebase auth
      const { email, password } = req.body;

      try {
            const userRecord = await admin.auth().getUserByEmail(email);
            const { uid } = userRecord;

            await admin.auth().signInWithEmailAndPassword(email, password);

            const token = await admin.auth().createCustomToken(uid);

            res.status(200).send({ token });
      } catch (error) {
            console.error(error);
            res.status(500).send(error);
      }
}*/

exports.signup = async (req, res) => {

      const { firstname, lastname, email, password, role } = req.body;

      try {
            // Check if the user already exists in Firestore
            const userDoc = await users.doc(email).get();
      
            if (userDoc.exists) {
                  res.status(400).send("User with the email already exists");
                  return;
            }
      
            // Create the user in Firebase Authentication
            const {uid} = await admin.auth().createUser({ email, password });
      
            // Save the user's data in Firestore
            const userRef = db.collection('users').doc(uid);
            //const createdAt = admin.firestore.Timestamp.fromDate(new Date())
            await userRef.set({ firstname, lastname, role });

            // Create a custom token for the user
            const token = await admin.auth().createCustomToken(uid);
      
            res.status(201).send({ token });
      } catch (error) {
            console.error(error);
            res.status(500).send(error);
      }
}