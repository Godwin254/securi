const Fingerprint = require('../services/fingerprint.service');

const fingerprintService = new Fingerprint();

exports.getUserByFingerprint = async (req, res) => {
      const { fingerprintId } = req.params;

      try {
            const user = await fingerprintService.getUserByFingerprintId(fingerprintId);
            req.io.emit("accessFingerprint", user);
            res.status(200).send(user);

      }catch(error){
            res.status(500).send(error);

      }
}