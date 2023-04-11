
const MemberService = require("../services/member.service");

const memberService = new MemberService();

exports.allMembers = async (req, res) => {

      try{
            const members = await memberService.getAllMembers(req.userId)
            res.status(200).send(members)

      }catch(error){
            console.error(error);
            res.status(500).send(error.message);
      }

}

exports.singleMember = (req, res) => {

}

exports.createMember = async (req, res) => {

      try{
            const {residentId} = req.params;

            const data = { residentId, ...req.body};
            const member = await memberService.createNewMember(residentId, data);
            res.status(201).send(`Created New Member ${member.memberId} for Resident ${residentId}`)

      }catch(error){
            console.error(error);
            res.status(500).send(error.message);
      }

}

exports.updateMember = (req, res) => {


}

exports.deleteMember = (req, res) => {
      
 
}