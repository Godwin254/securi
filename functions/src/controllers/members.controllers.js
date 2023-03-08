// Importing db from dbConfig.js
const db = require('../config/db');

const members = db.collection('members');

exports.allMembers = (req, res) => {

      //get all inventory
      members.get()
            .then(snapshot => {
                  const members = [];
                  snapshot.forEach(doc => {
                        const data = doc.data();
                        inventory.push(data);
                  });
                  return res.status(200).json(members);
            })
            .catch(error => console.log(error));


}

exports.singleMember = (req, res) => {

      //get single inventory
      const id = req.params.mId;

      members.doc(id).get()
            .then(doc => {
                  if (!doc.exists) {
                        return res.status(404).json({ error: 'Member not found' });
                  } else {
                        return res.status(200).json(doc.data());
                  }
            })
            .catch(error => console.log(error));


}

exports.createMember = (req, res) => {

      //create new inventory
      const id = req.params.Id;
      const data = {
            userId: id,
            ...req.body
      };

      members.add(data)
            .then(doc => {
                  res.status(201).json({ message: `New member added with ID: ${doc.id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });
}

exports.updateMember = (req, res) => {

      //update inventory
      const id = req.params.id;
      const data = req.body;

      members.doc(id).update(data)
            .then(() => {
                  res.status(200).json({ message: `Member updated with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });

}

exports.deleteMember = (req, res) => {
      
      //delete inventory
      const id = req.params.id;

      members.doc(id).delete()
            .then(() => {
                  res.status(200).json({ message: `Deleted member with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });
}