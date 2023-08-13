const Tag = require('../services/tag.service');
const Access = require('../services/access.service');
const ResidentService = require('../services/resident.service');
const EmailService = require('../helpers/EmailService');

const tagService = new Tag();
const accessService = new Access();
const emailService = new EmailService();
const residentService = new ResidentService();

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

            //get resident email
            const resident = await residentService.getOneResident(tag.residentId)
            if (resident && resident.email){
                  console.log(resident.email);
                  //emailService.sendEmail(resident.email, "VEHICLE ACCESSED!!", `Dear ${resident.firstname}, \nYour vehicle [${resident.vehicle.numberplate}] has been accessed at [${new Date().toLocaleTimeString()}]`)
                  emailService.sendEmailV2(resident.email, "VEHICLE ACCESSED!!", `Dear ${resident.firstname}, \nYour vehicle [${resident.vehicle.numberplate}] has been accessed at [${new Date().toLocaleTimeString()}]`)
            }

            req.io.emit("accessTag", accessData);
            res.status(200).send(tag)
      }catch(error){
            res.status(500).send(error);
            console.log(error)
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