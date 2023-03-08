const db = require('../config/db');

const tags = db.collection('tags');
const fingerprint = db.collection('fingerprint');

//Tag operations
exports.getTagID = (req, res) => {

      //get single inventory
      const id = req.params.id;

      members.doc(id).get()
            .then(doc => {
                  if (!doc.exists) {
                        return res.status(404).json({ error: 'Tag not found' });
                  } else {
                        return res.status(200).json(doc.data());
                  }
            })
            .catch(error => console.log(error));


}

exports.createTag = (req, res) => {

      //create new inventory
      const data = req.body;

      users.add(data)
            .then(doc => {
                  res.status(201).json({ message: `New Tag added with ID: ${doc.id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });
}

exports.updateTagID = (req, res) => {

      //update inventory
      const id = req.params.id;
      const data = req.body;

      members.doc(id).update(data)
            .then(() => {
                  res.status(200).json({ message: `Tag updated with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });

}

exports.deleteTagID = (req, res) => {
      
      //delete inventory
      const id = req.params.id;

      members.doc(id).delete()
            .then(() => {
                  res.status(200).json({ message: `Deleted Tag with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });
}



// Fingerprint operations
exports.getFingerID = (req, res) => {

      //get single inventory
      const id = req.params.id;

      members.doc(id).get()
            .then(doc => {
                  if (!doc.exists) {
                        return res.status(404).json({ error: 'Fingerprint not found' });
                  } else {
                        return res.status(200).json(doc.data());
                  }
            })
            .catch(error => console.log(error));


}

exports.createFingerprint = (req, res) => {

      //create new inventory
      const data = req.body;

      users.add(data)
            .then(doc => {
                  res.status(201).json({ message: `New Fingerprint added with ID: ${doc.id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });
}

exports.updateFingerID = (req, res) => {

      //update inventory
      const id = req.params.id;
      const data = req.body;

      members.doc(id).update(data)
            .then(() => {
                  res.status(200).json({ message: `Fingerprint updated with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });

}

exports.deleteFingerID = (req, res) => {
      
      //delete inventory
      const id = req.params.id;

      members.doc(id).delete()
            .then(() => {
                  res.status(200).json({ message: `Deleted fingerprint with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });
}