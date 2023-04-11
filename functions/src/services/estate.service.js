const db = require('../config/db');

class EstateService{
      constructor(){
            this.estatesCollection = db.collection('estates')
            this.usersCollection = db.collection('users')

      }

      //admin is incharge of a given estate and can own/ be incharge of several estates
      async getAllEstateConfigs(userId){
            const userDoc = await this.usersCollection.doc(userId).get();
            const userRole = userDoc.get('role');

            let estates = [];

            if (userRole === 'admin'){
                  const estateQuerySnapshot = await this.estatesCollection.get();
                  estates = estateQuerySnapshot.docs.map((doc) => ({ estateId: doc.id, ...doc.data() }));
            }

            return estates;
      }

      async getEstateConfig(userId){

            const userRef = this.estatesCollection.doc(userId);
            const user = await userRef.get();
            const estateRef = this.estatesCollection.doc(user.estateId);
            const estate = await estateRef.get();
        
            if (!estate.exists) {
              throw new Error('Estate not found');
            }
        
            const isUserAdmin = user.role === 'admin';
        
            if (isUserAdmin) {
              return estate.data();
            } else {
              const { estateName, location, currentTime } = estate.data();
              return { estateName, location, currentTime };
            }
      }

      async createNewEstate(userId,data){
            const userDoc = await this.usersCollection.doc(userId).get();
            const userRole = userDoc.get('role');

            if (userRole !== 'admin') {
                  throw new Error('Only an admin user can create a new estate');
            }
            
            const estateData = { ...data, owner: userId };
            const estateRef = await this.estatesCollection.add(estateData);


            return estateRef.id

      }

      async updateEstateConfig(userId,estateId, data){
            const estateRef = this.estatesCollection.doc(estateId);
            const estate = await estateRef.get();
        
            if (!estate.exists) {
              throw new Error('Estate not found');
            }
        
            const ownerId = estate.data().owner;
        
            if (ownerId !== userId) {
              throw new Error('You are not authorized to update this estate');
            }
        
            await estateRef.update(data);
        
            return 'Estate configuration updated successfully';

      }

}

module.exports = EstateService;