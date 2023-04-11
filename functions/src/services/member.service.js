const db = require('../config/db');

class MemberService{
      constructor(){
            
        this.membersCollection = db.collection('members')
      }

      async getAllMembers(residentId){
        try {
          const querySnapshot = await this.membersCollection.where('residentId', '==', residentId).get();
          const members = querySnapshot.docs.map((doc) => ({ memberId: doc.id, ...doc.data() }));
          return members;
        } catch (error) {
          console.error('Error getting members:', error);
          throw error;
        }
      }

      async getOneMember(residentId,memberId){
            try {
                  const doc = await this.membersCollection.doc(memberId).get();
                  if (doc.exists) {
                    const member = { memberId: doc.id, ...doc.data() };
                    if (member.residentId === residentId) {
                      return member;
                    } else {
                      throw new Error(`Member ${memberId} doesn't belong to resident ${residentId}`);
                    }
                  } else {
                    throw new Error(`Member ${memberId} not found`);
                  }
            } catch (error) {
                  console.error('Error getting member:', error);
                  throw error;
            }

      }

      async createNewMember(residentId,newMemberData) {
            try {
              // Check if the new member's residentId matches the current instance's residentId
              if (newMemberData.residentId !== residentId) {
                throw new Error(`New member doesn't belong to resident ${residentId}`);
              }
        
              // Add the new member to the members collection
              const docRef = await this.membersCollection.add({...newMemberData});
              const newMember = { memberId: docRef.id, ...newMemberData };
              return newMember;
            } catch (error) {
              console.error('Error creating new member:', error);
              throw error;
            }
      }

      async updateMemberData(residentId, memberId, data) {
            try {
              // Get the member document from the members collection
              const memberDoc = await this.membersCollection.doc(memberId).get();
        
              // Check if the member document exists and belongs to the current resident
              if (memberDoc.exists && memberDoc.data().residentId === residentId) {
                // Update the member document with the new data
                await this.membersCollection.doc(memberId).update(data);
                const updatedMember = { memberId: memberId, ...data };
                return updatedMember;
              } else {
                throw new Error(`Member ${memberId} not found or doesn't belong to resident ${residentId}`);
              }
            } catch (error) {
              console.error('Error updating member data:', error);
              throw error;
            }
      }

      async deleteMember(residentId, memberId){
            try {
                  // Get the member document from the members collection
                  const memberDoc = await this.membersCollection.doc(memberId).get();
            
                  // Check if the member document exists and belongs to the current resident
                  if (memberDoc.exists && memberDoc.data().residentId === residentId) {
                    // Delete the member document
                    await this.membersCollection.doc(memberId).delete();
                    const deletedMember = { id: memberId, ...memberDoc.data() };
                    return deletedMember;
                  } else {
                    throw new Error(`Member ${memberId} not found or doesn't belong to resident ${residentId}`);
                  }
                } catch (error) {
                  console.error('Error deleting member:', error);
                  throw error;
            }
      }

      async getMemberCount(residentId){
            try {
                  // Query the members collection to count the documents that belong to the current resident
                  const querySnapshot = await this.membersCollection.where('residentId', '==', residentId).get();
            
                  // Return the count of documents in the query snapshot
                  return querySnapshot.size;
                } catch (error) {
                  console.error('Error getting member count:', error);
                  throw error;
            }
      }


}

module.exports = MemberService;