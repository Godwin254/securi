const admin = require('firebase-admin');

admin.initializeApp({
      projectId: process.env.PROJECT_ID,
      credentials: admin.credential.applicationDefault(),
      databaseURL: process.env.DB_URL
});


const db = admin.firestore();


module.exports = db;