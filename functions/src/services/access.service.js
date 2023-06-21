const db = require('../config/db');


class Access {
      constructor(){
      this.accessCollection = db.collection('accesses');
      }
      
      async createAccess(accessData){
            const accessRef = await this.accessCollection.add(accessData);
            const accessDoc = await accessRef.get();
            
            return accessDoc.data();
      }
      
      async getUserAccessLogs(userId){
            //access logs for given user
            const querySnapshot = await this.accessCollection
                  .where('residentId', '==', userId)
                  .where('deleted', '==', false)
                  .get();
            
            if(querySnapshot.empty) return []; //empty array

            const accesses = [];
            querySnapshot.docs.map(accessDoc => {
                  const accessData = accessDoc.data();
                  accesses.push({...accessData})
            });

            return accesses;
      }
      
      async getEstateAccesseLogs(estateId){
            //access logs for given estate
            const accesses = [];
            const querySnapshot = await this.accessCollection
                  .where('estateId', '==', estateId)
                  .where('deleted', '==', false)
                  .get();
            
            if(querySnapshot.empty) return []; //empty array
            
            querySnapshot.docs
                  .map(accessDoc => {
                  const accessData = accessDoc.data();
            
                  accesses.push({...accessData})
                  });
            
            return accesses;
      }
      
 
}

module.exports = Access;