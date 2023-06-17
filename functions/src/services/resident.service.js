const db = require('../config/db');
const EstateService = require('../services/estate.service')
const MemberService = require('./member.service')

class ResidentService{
      constructor(){
            this.memberService = new MemberService()
            this.estateService = new EstateService()
            this.userCollection = db.collection('users')
      }

      async getAllResidents(){
            const residents = [];
            const querySnapshot = await this.userCollection
                  .where('role', '==', 'user')
                  .where('deleted', '==', false)
                  .get();
            
            if (querySnapshot.empty) throw new Error('No Residents found!')

            await Promise.all(
                  querySnapshot.docs.map(
                        async (residentDoc) => {
                              const memberData = await this.memberService.getAllMembers(residentDoc.id)
                              const members = memberData.length ? memberData : {};

                              const residentData = {
                                    ...residentDoc.data(),
                                    members
                              }
                              residents.push(residentData)
                        }
                  )
            )
            return residents;
      }

      //get all residents who belong to given estate
      async getAllResidentsByEstate(estateId){
            const residents = [];
            const querySnapshot = await this.userCollection
                  .where('role', '==', 'user')
                  .where('deleted', '==', false)
                  .where('estateId', '==', estateId)
                  .get();
            
            if (querySnapshot.empty) return residents; //no residents found for this estate

            await Promise.all(
                  querySnapshot.docs.map(
                        async (residentDoc) => {
                              const memberData = await this.memberService.getAllMembers(residentDoc.id)
                              const members = memberData.length ? memberData : [];

                              const residentData = {
                                    ...residentDoc.data(),
                                    members
                              }
                              residents.push(residentData)
                        }
                  )
            )
            return residents;
      }

      async getOneResident(residentId){
            const querySnapshot = await this.userCollection
                  .where("uid", '==', residentId)
                  .where('role', '==', 'user')
                  .where('deleted', '==', false)
                  .get()
            
            if (querySnapshot.empty) throw new Error('Resident not found!')

            const membersData = await this.memberService.getAllMembers(querySnapshot.docs[0].id)
            const estateData = await this.estateService.getUserEstateConfigs(querySnapshot.docs[0].id)
            const estate = (typeof estateData === 'object' && Object.keys(estateData).length > 0 && !estateData.deleted)
            ? estateData
            : {};
            const members = (typeof membersData === 'object' && Object.keys(membersData).length > 0)
                  ? membersData
                  : [];

            const {estateName, location } = estate;
            const resident = {
                  ...querySnapshot.docs[0].data(),
                  members,
                  estate: {
                        estateName,
                        location
                  }
            }
            return resident;     
      }

      async updateResidentData(residentId, update){
            const querySnapshot = await this.userCollection
                  .where("uid", '==', residentId)
                  .where('role', '==', 'user')
                  .where('deleted', '==', false)
                  .get()
            
            if (querySnapshot.empty) throw new Error('Resident not found!')

            await querySnapshot.docs[0].ref.update(update)
            const updatedResident = (await querySnapshot.docs[0].ref.get()).data();
            console.log(updatedResident.estateId);
            await this.estateService.assignResidentToEstate(updatedResident.estateId, residentId)
            return updatedResident;
      }

      async deleteResidentData(residentId){
            //soft delete
            const querySnapshot = await this.userCollection
                  .where("uid", '==', residentId)
                  .where('role', '==', 'user')
                  .where('deleted', '==', false)
                  .get()
            
            if (querySnapshot.empty) throw new Error('Resident not found!')

            return await querySnapshot.docs[0].ref.update({deleted: true})
      }


      //member operation

      async createNewMember(residentId, memberData){
            const querySnapshot = await this.userCollection
                  .where("uid", '==', residentId)
                  .where('role', '==', 'user')
                  .where('deleted', '==', false)
                  .get()

            return await this.memberService.createNewMember(querySnapshot.docs[0].id, memberData)

      }

      async updateMember(residentId, memberId, updatedData){
            const querySnapshot = await this.userCollection
                  .where("uid", '==', residentId)
                  .where('role', '==', 'user')
                  .where('deleted', '==', false)
                  .get()

            return await this.memberService.updateMemberData(querySnapshot.docs[0].id, memberId, updatedData)
      }

      async deleteMember(residentId, memberId){
            const querySnapshot = await this.userCollection
                  .where("uid", '==', residentId)
                  .where('role', '==', 'user')
                  .where('deleted', '==', false)
                  .get()

            return await this.memberService.deleteMember(querySnapshot.docs[0].id, memberId)
      }


}

module.exports = ResidentService;