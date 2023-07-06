const AdminService = require('../services/admin.service');

const adminService = new AdminService();

exports.getAdminData =  async (req, res) => {
      const { adminId } = req.params;

      try{
            const admin = await adminService.getAdminData(adminId);
            res.status(200).send(admin)
      }catch(error){
            console.log(error)
            res.status(500).send(error);
      }

}
exports.updateAdminData =  async (req, res) => {
      const { adminId } = req.params;
      try{
            await adminService.updateAdminData(res.body, adminId)
            res.status(200).send('Admin updated Successfully!')
      }catch(error){
            res.status(500).send(error);
      }

}
exports.deleteAdminData =  async (req, res) => {
      const { adminId } = req.params;
      try{
            await adminService.deleteAdminData(adminId);
            res.status(204).send('Admin deleted!')
      }catch(error){
            res.status(500).send(error);
      }

}
exports.createNewEstate =  async (req, res) => {
      const { adminId } = req.params;
      try{
            const estate =  await adminService.createNewEstate(adminId, req.body)
            res.status(201).send(estate);
      }catch(error){
            res.status(500).send(error);
      }

}
exports.updateEstateConfig =  async (req, res) => {
      const { adminId } = req.params;
      try{
            await adminService.updateEstate(adminId, req.body);
            res.status(200).send('Estate updated Successfully!')
      }catch(error){
            res.status(500).send(error);
      }

}
exports.deleteEstateConfig =  async (req, res) => {
      const { adminId } = req.params;
      try{
            await adminService.deleteEstate(adminId)
            res.status(204).send('Estate deleted!')
      }catch(error){
            res.status(500).send(error);
      }

}
