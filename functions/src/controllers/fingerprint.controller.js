const Fingerprint = require('../services/fingerprint.service');
const AccessService = require('../services/access.service');

const fingerprintService = new Fingerprint();
const accessService = new AccessService();

exports.getUserByFingerprint = async (req, res) => {
      const { fingerprintId } = req.params;

      try {
            const user = await fingerprintService.getUserByFingerprintId(fingerprintId);
            //const accessedBy = `${user.firstname} ${user.lastname} (${user.referenceType})`;
            //await accessService.updateAccess(user.uid, user.estateId, accessedBy);
            req.io.emit("accessFingerprint", user);
            res.status(200).send(user);

      }catch(error){
            res.status(500).send(error);

      }
}