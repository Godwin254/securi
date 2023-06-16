const db = require('../config/db');

class EstateService{
      constructor(){
            this.estatesCollection = db.collection('estates');
      }

      async getAllEstates(){
            const querySnapshot = await this.estatesCollection
                  .where('deleted', '==', false)
                  .get();
            if(querySnapshot.empty) throw new Error('No estates found!')
            return querySnapshot.docs.map(doc => doc.data());
      }

      async getEstateConfig(userId){
            const querySnapshot = await this.estatesCollection
                  .where('owner', '==', userId)
                  .where('deleted', '==', false)
                  .get();
            if(querySnapshot.empty) throw new Error('User not assigned to any estate')
            return querySnapshot.docs[0].data();
      }

      async getEstate(estateId){
            const querySnapshot = await this.estatesCollection
                  .where('estateId', '==', estateId)
                  .where('deleted', '==', false)
                  .get();
            if(querySnapshot.empty) throw new Error('Estate not found!')
            return querySnapshot.docs[0].data();
      }

      async getUserEstateConfigs(userId) {
            const querySnapshot = await this.estatesCollection
              .where('deleted', '==', false)
              .where('residentIds', 'array-contains', userId)
              .get();
          
            if (querySnapshot.empty) throw new Error('User not assigned to any estate');
          
            return querySnapshot.docs[0].data();
      }
          

      async assignResidentToEstate(estateId, residentId) {
            if (!estateId) return;
            const querySnapshot = await this.estatesCollection
                  .where('estateId', '==', estateId)
                  .where('deleted', '==', false)
                  .get();
            
            if(querySnapshot.empty) throw new Error('Estate not found!');
            
            const residentIds = querySnapshot.docs[0].data().residentIds || [];
            const updatedResidentIds = [
              ...residentIds,
              residentId
            ];

            await querySnapshot.docs[0].ref.update({ residentIds: updatedResidentIds });
         
            console.log('Residents assigned to the estate successfully!');
      }
          

      //check is user is a member of estate

      async createNewEstate(adminId, newEstateData){
            const estateRef = this.estatesCollection.doc();
            const estateData = {
                  estateId: estateRef.id,
                  owner: adminId, 
                  ...newEstateData,
                  createdAt: new Date().toDateString(),
                  deleted: false
            }
            await estateRef.set(estateData)

            return estateData;
      }

      async updateEstateConfig(adminId, estateData){
            const querySnapshot = await this.estatesCollection
                  .where('owner', '==', adminId)
                  .where('deleted', '==', false)
                  .get();

            if (querySnapshot.empty) throw new Error('No estate found under owner ID!')

            return await querySnapshot.docs[0].ref.update(estateData)
      }


      async deleteEstateConfig (adminId) {
            const querySnapshot = await this.estatesCollection
                  .where('owner', '==', adminId)
                  .where('deleted', '==', false)
                  .get();

            if (querySnapshot.empty) throw new Error('No estate found under owner ID!')

            return await querySnapshot.docs[0].ref.update({deleted: true});

      }

}

module.exports = EstateService;