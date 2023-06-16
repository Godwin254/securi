const EstateService = require('../services/estate.service');

const estateService = new EstateService();

exports.getAllEstates = async (req, res) => {
      try {
            const estates = await estateService.getAllEstates();
            res.status(200).send(estates);
      } catch (error) {
            res.status(500).send(error.message);
      }
}

exports.getEstateConfig = async (req, res) => {
      const { userId } = req.params;
      try {
            const estate = await estateService.getEstateConfig(userId);
            res.status(200).send(estate);
      } catch (error) {
            res.status(500).send(error.message);
      }
}

exports.getEstate = async (req, res) => {
      const { estateId } = req.params;
      try {
            const estate = await estateService.getEstate(estateId);
            res.status(200).send(estate);
      } catch (error) {
            res.status(500).send(error.message);
      }
}