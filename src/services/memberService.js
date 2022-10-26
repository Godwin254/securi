const Member = require('../models/Member');

//get all members for resident
const getAllMembers = async (residentId) => {
    try{
        const members = await Member.find({residentId: residentId});
        return members;
    }catch(err){
        throw err;
    }
}

//get one member for resident
const getMember = async (residentId, memberId) => {
    try{
        const member = await Member.findById(memberId);
        return member;
    }catch(err){
        throw err;
    }
}

//create a new member for resident
const createMember = async (newMember) => {
    try{
        const member = await Member.create(newMember);
        member.save();
        return member;
    }catch(err){
        throw err;
    }
}

//update a member for resident 
const updateMember = async (residentId, memberId, updatedMember) => {
    try{
        const member = await Member.findByIdAndUpdate({_id: memberId, residentId: residentId}, updatedMember, {new: true});
        return member;
    }catch(err){
        throw err;
    }
}

//delete a member for resident
const deleteMember = async (residentId, memberId) => {
    try{
        const member = await Member.findByIdAndDelete({_id: memberId, residentId: residentId});
        return member;
    }catch(err){
        throw err;
    }
}

module.exports = {
    getAllMembers,
    getMember,
    createMember,
    updateMember,
    deleteMember
}
