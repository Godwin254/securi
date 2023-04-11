const db = require('../config/db');

class AdminService{
      constructor(adminId){
            this.estateService = new EstateService(adminId)
            this.adminsCollection = db.collection('users')
      }

      async getAllAdmins(){
            const adminQuerySnapshot = await this.usersCollection.where('role', '==', 'admin').get();
            const adminDocs = adminQuerySnapshot.docs;
        
            const admins = [];
            for (const adminDoc of adminDocs) {
              const adminData = adminDoc.data();
              const estate = await this.estateService.getEstateByAdmin(adminDoc.id);

              admins.push({
                id: adminDoc.id,
                email: adminData.email,
                estate: estate,
              });
            }
        
            return admins;
      }

      async getAdmin(){
            const adminDoc = await this.usersCollection.doc(adminId).get();

            if (!adminDoc.exists || adminDoc.data().role !== 'admin') {
              return null;
            }
        
            const adminData = adminDoc.data();
            const estate = await this.estateService.getEstateByAdmin(adminId);
        
            return {
              id: adminDoc.id,
              email: adminData.email,
              estate: estate,
            };
      }

      //created during signup
      async createNewUser(data){

      }

      async updateAdminData(data){
            const adminDoc = await this.usersCollection.doc(data.id).get();

            if (!adminDoc.exists || adminDoc.data().role !== 'admin') {
              return false;
            }
        
            await this.usersCollection.doc(data.id).update(data);
        
            const updatedAdminDoc = await this.usersCollection.doc(data.id).get();
            const updatedAdminData = updatedAdminDoc.data();
            const estate = await this.estateService.getEstateByAdmin(data.id);
        
            return {
              id: updatedAdminDoc.id,
              email: updatedAdminData.email,
              estate: estate,
            };
      }

      async deleteAdminData(){
            const adminDoc = await this.usersCollection.doc(adminId).get();

            if (!adminDoc.exists || adminDoc.data().role !== 'admin') {
              return false;
            }
        
            const estate = await this.estateService.getEstateByAdmin(adminId);
            if (estate) {
              await this.estateService.deleteEstate(estate.id);
            }
        
            await this.usersCollection.doc(adminId).delete();
        
            return {message: 'User deleted!'};
      }

      async createNewEstate() {
            const adminDoc = await this.usersCollection.doc(adminId).get();

            if (!adminDoc.exists || adminDoc.data().role !== 'admin') {
              return false;
            }
        
            const newEstate = await this.estateService.createEstate(estateData);
        
            await this.usersCollection.doc(adminId).update({
              estate: newEstate.id,
            });
        
            return newEstate;

      }


}

module.exports = AdminService;