const Tag = require('../services/tag.service');
const Access = require('../services/access.service');

const tagService = new Tag();
const accessService = new Access();

exports.createTag =  async (req, res) => {
      //create tag
      try{
            const tag = await tagService.createTag(req.body);
            res.status(201).send(tag);
      }catch(error){
            res.status(201).send(error);
      }
}

exports.getTag =  async (req, res) => {
      const { tagId } = req.params;
      try{
            console.log(tagId)
            const tag = await tagService.getTag(tagId);

            //store access and access time
            const accessData = {
                  tagId,
                  residentId: tag.residentId,
                  estateId: tag.estateId,
                  day: new Date().toDateString(),
                  accessTime: new Date().toLocaleTimeString(),
                  deleted: false
            }
            await accessService.createAccess(accessData);
            res.status(200).send(tag)
      }catch(error){
            res.status(500).send(error);
      }
}

exports.getAllTags =  async (req, res) => {
      const {estateId} = req.params;
      try{
            const tags = await tagService.getAllTags(estateId)
            res.status(200).send(tags)
      }catch(error){
            res.status(500).send(error);
      }
}