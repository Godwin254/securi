const db = require('../config/db');

const ResidentService = require('../services/resident.service')


class Access {
      constructor(){
            this.residentService = new ResidentService();
            this.accessCollection = db.collection('accesses');
      }
      
      async createAccess(accessData){
            const accessRef = await this.accessCollection.add(accessData);
            const accessDoc = await accessRef.get();
            
            return accessDoc.data();
      }
      
      async getUserAccessLogs(userId){
            //access logs for given user
            const accesses = [];
            const querySnapshot = await this.accessCollection
                  .where('residentId', '==', userId)
                  .where('deleted', '==', false)
                  .orderBy('accessTime', 'asc') 
                  .get();
            
            if(querySnapshot.empty) return []; //empty array

            await Promise.all(
                  querySnapshot.docs.map(
                        async (accessDoc) => {
                              const residentData = await this.residentService.getOneResident(accessDoc.data().residentId)
                              const resident = residentData ? residentData : {};
                              const vehicle = resident.vehicle.make ? residentData.vehicle.make : "No Vehicle";
                              const numberplate = resident.vehicle.numberplate ? residentData.vehicle.numberplate : "No Vehicle";
                        
                              const accessData = {
                                    ...accessDoc.data(),
                                    resident:  `${resident.firstname} ${resident.lastname}`,
                                    vehicle,
                                    numberplate,
                                    accessedBy: "Admin" //TODO: get user from any collection

                              }
                              accesses.push(accessData)
                        }
                  )
            )

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
            
            await Promise.all(
                  querySnapshot.docs.map(
                        async (accessDoc) => {
                              const residentData = await this.residentService.getOneResident(accessDoc.data().residentId)
                              const resident = residentData ? residentData : {};
                              const vehicle = resident.vehicle.make ? residentData.vehicle.make : "No Vehicle";
                              const numberplate = resident.vehicle.numberplate ? residentData.vehicle.numberplate : "No Vehicle";
                        
                              const accessData = {
                                    ...accessDoc.data(),
                                    resident:  `${resident.firstname} ${resident.lastname}`,
                                    vehicle,
                                    numberplate,
                                    accessedBy: "Admin" //TODO: get user from any collection

                              }
                              accesses.push(accessData)
                        }
                  )
            )

            return accesses;
      }
      
 
}

module.exports = Access;