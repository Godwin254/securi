const express = require('express');
const router = express.Router();


const {
    getAllResidents,
    getResident,
    createResident,
    updateResident,
    deleteResident
} = require('../controllers/residentController');

const {
    getAllMembers,
    getMember,
    createMember,
    updateMember,
    deleteMember
} = require('../controllers/memberController');

//resident routes
router.get('/', getAllResidents);
router.get('/:residentId', getResident);
router.post('/', createResident); //register
//router.post ('/login', loginResident);
router.patch('/:residentId', updateResident);
router.delete('/:residentId', deleteResident);

//member routes
router.get('/:residentId/members', getAllMembers);
router.get('/:residentId/members/:memberId', getMember);
router.post('/:residentId/members', createMember);
router.patch('/:residentId/members/:memberId', updateMember);
router.delete('/:residentId/members/:memberId', deleteMember);

module.exports = router;