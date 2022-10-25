const memberService = require('../services/memberService');

//get all members for resident
const getAllMembers = async (req, res) => {
    try{
        const { residentId } = req.params;
        const members = await memberService.getAllMembers(residentId);
        res.status(200).json(members);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//get one member for resident
const getMember = async (req, res) => {
    try{
        const { residentId, memberId } = req.params;
        const member = await memberService.getMember(residentId, memberId);
        res.status(200).json(member);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//create new member for resident
const createMember = async (req, res) => {
    try{
        const { residentId } = req.params;
        const newMember = {residentId, ...req.body};
        const member = await memberService.createMember(newMember);
        res.status(201).json(member);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//update a member for resident
const updateMember = async (req, res) => {
    try{
        const { residentId, memberId } = req.params;
        const updatedMember = req.body;
        const member = await memberService.updateMember(residentId, memberId, updatedMember);
        res.status(200).json(member);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//delete a member for resident
const deleteMember = async (req, res) => {
    try{
        const { residentId, memberId } = req.params;
        const member = await memberService.deleteMember(residentId, memberId);
        res.status(200).json({message: "Member deleted successfully"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getAllMembers,
    getMember,
    createMember,
    updateMember,
    deleteMember
}
