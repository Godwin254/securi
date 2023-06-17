const ResidentService = require('../services/resident.service')

const residentService = new ResidentService()

exports.getAllResidents = async (req, res) => {
      try{
            const residents = await residentService.getAllResidents();
            return res.status(200).send(residents);
      }catch(error){
            res.status(500).send(error);
      }
}

exports.getAllResidentsByEstate = async (req, res) => {
      const {estateId} = req.params;
      try{
            const residents = await residentService.getAllResidentsByEstate(estateId);
            res.status(200).send(residents);
      }catch(error){
            res.send(500).send(error);
      }
}

exports.getResident = async (req, res) => {
      const {residentId} = req.params;
      try{
            const resident = await residentService.getOneResident(residentId)
            return res.status(200).send(resident);
      }catch(error){
            res.status(500).send(error);
      }
}

exports.updateResident = async (req, res) => {
      const {residentId} = req.params;
      
      try{
            await residentService.updateResidentData(residentId, req.body)
            return res.status(200).send('Resident updated succesfully!');
      }catch(error){
            res.status(500).send(error);
      }
}

exports.deleteResident = async(req, res) => {
      const {residentId} = req.params;
      try{
            await residentService.deleteResidentData(residentId)
            res.status(204).send(`Resident deleted!`)
      }catch(error){
            res.status(500).send(error)
      }
}


//members operations
exports.createMember = async (req, res) => {
      const {residentId} = req.params;
      try{
            const member = await residentService.createNewMember(residentId, req.body)
            res.status(201).send(member)
      }catch(error){
            res.status(500).send(error)
      }
}

exports.updateMember = async (req, res) => {
      const {residentId, memberId} = req.params;
      try{
            await residentService.updateMember(residentId, memberId, req.body);
            res.status(200).send('Member updated successfully!')
      }catch(error){
            res.status(500).send(error)
      }
}
exports.deleteMember = async (req, res) => {
      const {residentId, memberId} = req.params;
      try{
            await residentService.deleteMember(residentId, memberId)
            res.status(204).send('Member deleted!')
      }catch(error){
            res.status(500).send(error)
      }
}
