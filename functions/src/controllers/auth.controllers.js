const db = require('../config/db');

const users = db.collection('users');

exports.loginUser = (req, res) => {
      //firebase auth
}

exports.createUser = (req, res) => {

      //create new inventory
      const data = req.body;

      users.add(data)
            .then(doc => {
                  res.status(201).json({ message: `New user added with ID: ${doc.id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });
}