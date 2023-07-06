const db = require('../config/db');
const EstateService = require('./estate.service');

class AdminService{
  constructor(){
    this.estateService = new EstateService()
    this.usersCollection = db.collection('users')
  }


  //admin operations
  async getAllAdmins(){
    const admins = [];
    const querySnapshot = await this.usersCollection
      .where('role', '==', 'admin')
      .where('deleted', '==', false)
      .get();
    
    if(querySnapshot.empty) throw new Error('No Admins available!');

    querySnapshot.docs
      .map(adminDoc => {
        const adminData = adminDoc.data();

        admins.push({...adminData})
      })
    
    return admins;
  }


  async getAdminData (adminId){
    const querySnapshot = await this.usersCollection
      .where('uid', '==', adminId )
      .where('role', '==', 'admin')
      .where('deleted', '==', false)
      .get();
    
    if (querySnapshot.empty) throw new Error('Admin not found!');
    const estateData = await this.estateService.getEstateConfig(querySnapshot.docs[0].id)
    
    const estate = (typeof estateData === 'object' && Object.keys(estateData).length > 0 && !estateData.deleted)
    ? estateData
    : {};
    const admin = {
      ...querySnapshot.docs[0].data(),
      estate
    };

    return admin;
  }



  async updateAdminData(newAdminData, adminId){
    const querySnapshot = await this.usersCollection
      .where('id', '==', adminId)
      .where('role', '==', 'admin')
      .where('deleted', '==', false)
      .get()
    
    if(querySnapshot.empty) throw new Error('No admin found with the ID')

    return await querySnapshot.docs[0].ref.update(newAdminData)
  }

  async deleteAdminData(adminId){
      //soft delete
    const querySnapshot = await this.usersCollection
      .where('id', '==', adminId )
      .where('role', '==', 'admin')
      .where('deleted', '==', false)
      .get();
    
    if(querySnapshot.empty) throw new Error('No Admin found with the ID')

    return await querySnapshot.docs[0].ref.update({deleted: true}) //soft delete
  }  
  
  async deleteAdminDataPermanently(adminId){
      //Hard delete
    const querySnapshot = await this.usersCollection
      .where('id', '==', adminId )
      .where('role', '==', 'admin')
      .where('deleted', '==', false)
      .get();
    
    if(querySnapshot.empty) throw new Error('No Admin found with the ID')

    return await querySnapshot.docs[0].ref.delete();

  }

  //estate operations done by admin
  async createNewEstate(adminId, newEstateData) {
    const querySnapshot = await this.usersCollection
      .where('uid', '==', adminId )
      .where('role', '==', 'admin')
      .where('deleted', '==', false)
      .get();

    const newEstate = await this.estateService.createNewEstate(querySnapshot.docs[0].id, newEstateData)
    return newEstate;
  }
  async updateEstate(adminId, updatedEstateData ) {
    const querySnapshot = await this.usersCollection
      .where('uid', '==', adminId )
      .where('role', '==', 'admin')
      .where('deleted', '==', false)
      .get();
    const updatedEstate = await this.estateService.updateEstateConfig(querySnapshot.docs[0].id, updatedEstateData);
    return updatedEstate;
  }
  async deleteEstate(adminId) {
    const querySnapshot = await this.usersCollection
      .where('uid', '==', adminId )
      .where('role', '==', 'admin')
      .where('deleted', '==', false)
      .get();
    const deletedEstate = await this.estateService.deleteEstateConfig(querySnapshot.docs[0].id);
    return deletedEstate;
  }


}

module.exports = AdminService;