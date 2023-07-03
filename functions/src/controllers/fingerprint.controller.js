const Fingerprint = require('../services/fingerprint.service');

const fingerprintService = new Fingerprint();

exports.getUserByFingerprint = async (req, res) => {
      const { fingerprintId } = req.params;

      try {
            const {firstname, lastname, email, referenceType} = await fingerprintService.getUserByFingerprintId(fingerprintId);

            const user = {firstname, lastname, email, referenceType}

            res.status(200).send(user);

      }catch(error){
            res.status(500).send(error);

      }
}