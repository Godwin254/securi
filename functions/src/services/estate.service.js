const db = require('../config/db');

class EstateService{
      constructor(){
            this.estatesCollection = db.collection('estates');
      }

      async getEstateConfig(userId){
            const querySnapshot = await this.estatesCollection
                  .where('owner', '==', userId)
                  .get();
            if(querySnapshot.empty) throw new Error('User not assigned to any estate')
            return querySnapshot.docs[0].data();
      }

      async createNewEstate(adminId, newEstateData){
            const estateRef = this.estatesCollection.doc();
            const estateData = {
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