const express = require('express');
const router = express.Router();

//import controllers
const {
    getAllAdmins,
    getAdmin,
    createAdmin,
    loginAdmin,
    updateAdmin,
    deleteAdmin
} = require('../controllers/adminController');

//get all admins
router.get('/', getAllAdmins);
//get an admin
router.get('/:adminId', getAdmin);
//create a new admin
router.post('/register', createAdmin);

//admin login
router.post('/login', loginAdmin);
//update an admin
router.patch('/:adminId', updateAdmin);
//delete an admin
router.delete('/:adminId', deleteAdmin);

module.exports = router;