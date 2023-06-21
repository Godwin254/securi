const AccessService = require('../services/access.service');

const accessService = new AccessService();

exports.createAccess =  async (req, res) => {
      //create access
}

exports.getUserAccess =  async (req, res) => {
      const { userId } = req.params;

      try{
            const accesses = await accessService.getUserAccessLogs(userId)
            res.status(200).send(accesses)
      }catch(error){
            res.status(500).send(error);
      }
}

exports.getEstateAccess =  async (req, res) => {
      const { estateId } = req.params;

      try{
            const accesses = await accessService.getEstateAccesseLogs(estateId)
            res.status(200).send(accesses)
      }catch(error){
            res.status(500).send(error);
      }
}