const db = require('../config/db');
const EstateService = require('./estate.service');
const MemberService = require('./member.service')

class ResidentService{
      constructor(){
            this.memberService = new MemberService()
            this.usersRef = db.collection('users')
      }

      async getAllResidents(){
            const residents = [];
            const snapshot = await this.usersRef.where('role', '==', 'resident').get();
            if (snapshot.empty) {
                  return residents;
            }

            const residentPromises = snapshot.docs.map(async (doc) => {
                  const resident = doc.data();
                  const members = await this.memberService.getAllMembers(resident.id);
                  
                  return {
                  ...resident,
                  members: members,
                  };
            });

            residents.push(...await Promise.all(residentPromises));
            return residents;
      }

      async getOneResident(residentId){
            const residentRef = this.usersRef.doc(residentId);
            const residentDoc = await residentRef.get();
            if (!residentDoc.exists || residentDoc.data().role !== 'resident') {
              throw new Error('Resident not found');
            }
        
            const resident = residentDoc.data();
            const members = await this.memberService.getAllMembers(resident.id);
        
            return {
              ...resident,
              members: members,
            };
      }
      //created during signup
      async createNewResident(data){

      }

      async updateResidentData(residentId, data){
            const residentRef = this.usersRef.doc(residentId);
            const residentDoc = await residentRef.get();
            if (!residentDoc.exists || residentDoc.data().role !== 'resident') {
              throw new Error('Resident not found');
            }

            const members = await this.memberService.getAllMembers(residentId);
        
            const updatedRes = await residentRef.update(data);
        
            return {...updatedRes, members}
      }

      async deleteResidentData(residentId){
            const residentRef = this.usersRef.doc(residentId);
            const residentDoc = await residentRef.get();
        
            if (!residentDoc.exists || residentDoc.data().role !== 'resident') {
              throw new Error('Resident not found');
            }
        
            // Delete the resident document
            await residentRef.delete();
        
            // Delete all members associated with this resident
            const membersQuery = db.collection('members').where('residentId', '==', residentId);
            const membersSnapshot = await membersQuery.get();
            const batch = db.batch();
            membersSnapshot.forEach((doc) => batch.delete(doc.ref));
            await batch.commit();
        
            return {
              id: residentDoc.id,
              message: 'Resident and associated members deleted successfully',
            };
      }


}

module.exports = ResidentService;