const db = require('../config/db');

class MemberService{

  constructor(){     
    this.membersCollection = db.collection('members')
  }

  async getAllMembers(residentId){
    const members = [];
    const querySnapshot = await this.membersCollection
      .where('residentId', '==', residentId)
      .where('deleted', '==', false)
      .get();

    //if (querySnapshot.empty) throw new Error('No members found!')

    querySnapshot.docs.map(
      memberDoc =>  members.push({...memberDoc.data()})
    )

    return members;
  }

  async getOneMember(residentId, memberId){
    const querySnapshot = await this.membersCollection
      .where('residentId', '==', residentId)
      .where('deleted', '==', false)
      .get();

    if (querySnapshot.empty) throw new Error('Member not found!')

    return querySnapshot.docs[0].data();
  }

  async createNewMember(residentId, newMemberData) {
    const memberRef = this.membersCollection.doc();

    const memberData = {
      memberId: memberRef.id,
      residentId,
      ...newMemberData,
      createdAt: new Date().toDateString(),
      deleted: false
    }
    await memberRef.set(memberData);

    return memberData;
  }

  async updateMemberData(residentId, memberId, data) {
    
    const querySnapshot = await this.membersCollection
      .where('residentId', '==', residentId)
      .where('memberId', '==', memberId)
      .where('deleted', '==', false)
      .get();

    if (querySnapshot.empty) throw new Error('Member not found!')
    console.log(data)
    return await querySnapshot.docs[0].ref.update(data);

  }

  async deleteMember(residentId, memberId){
    const querySnapshot = await this.membersCollection
      .where('residentId', '==', residentId)
      .where('memberId', '==', memberId)
      .where('deleted', '==', false)
      .get();

    if (querySnapshot.empty) throw new Error('Member not found!')

    return await querySnapshot.docs[0].ref.update({deleted: true});
  }
}

module.exports = MemberService;