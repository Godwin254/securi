const db = require('../config/db');
const controller = require('./hardware.controllers')
const tags = db.collection('tags');
const fingerprint = db.collection('fingerprint');


exports.accessUser = (req, res) => {
      const tagID = controller.getTagID;
      const fingerID = controller.getFingerID;

      //use data above to retrive user
      return res.status(200).json({tagID, fingerID});
}

