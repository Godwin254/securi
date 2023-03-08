// Importing db from dbConfig.js
const db = require('../config/db');

const users = db.collection('users');
const details = db.collection('details');
const members = db.collection('members');

exports.allUsers = (req, res) => {

      //get all user
      users.get()
            .then(snapshot => {
                  const users = [];

                  snapshot.forEach(doc => {
                        const data = {
                              uid: doc.id,
                              ...doc.data()
                        }
                        
                        users.push(data);
                  });
                  return res.status(200).json(users);
            })
            .catch(error => console.log(error));


}

exports.singleUser = (req, res) => {

      //get single user
      const id = req.params.id;

      users.doc(id).get()
            .then(doc => {
                  if (!doc.exists) {
                        return res.status(404).json({ error: 'User not found' });
                  } else {
                        return res.status(200).json({uid: doc.id, ...doc.data()});
                  }
            })
            .catch(error => console.log(error));


}

exports.updateUser = (req, res) => {

      //update inventory
      const id = req.params.id;
      const data = req.body;

      users.doc(id).update(data)
            .then(() => {
                  res.status(200).json({ message: `User updated with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });

}

exports.deleteUser = (req, res) => {
      
      //delete inventory
      const id = req.params.id;

      users.doc(id).delete()
            .then(() => {
                  res.status(200).json({ message: `Deleted User with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });
}