const ResidentService = require('../services/resident.service')

const residentService = new ResidentService()

exports.allResidents = async (req, res) => {


      try{
            const residents =  await residentService.getAllResidents()
            return res.status(200).json(residents);
      }catch(error){
            console.log(error)
            res.status(500).send(error.message);
      }


}

exports.singleResident = async (req, res) => {

      //get single user
      const {residentId} = req.params;

      try{
            const resident = await residentService.getOneResident(residentId)

      }catch(error){
            res.status(500).send(error.message);
      }


}

exports.updateResident = (req, res) => {

      //update inventory
      const id = req.params.id;
      const data = req.body;

      users.doc(id).update(data)
            .then(() => {
                  res.status(200).json({ message: `User updated with ID: ${id}` });
            })
            .catch(error => {
                  res.status(400).json({ error: 'Something went wrong' });
                  console.log(error);
            });

}

exports.deleteResident = async(req, res) => {
      
      const {residentId} = req.params;

      try{
            const deleted = await residentService.deleteResidentData(residentId);
            res.status(200).send(`Resident ${deleted.id} deleted successfully!`)
      }catch(error){
            console.error(error)
            res.status(500).send(error.message)
      }
}