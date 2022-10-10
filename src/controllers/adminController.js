const bcrypt = require('bcrypt');
const { getAllAdmins,
        getAdmin,
        createAdmin,
        updateAdmin,
        deleteAdmin 
    } = require('../services/adminService');

//get all admins
const getAllAdmins = async (req, res) => {
    try{
        const admins = await getAllAdmins();
        res.status(200).json(admins);

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//get one admin
const getAdmin = async (req, res) => {
    try{
        const { adminId } = req.params;
        const admin = await getAdmin(adminId);
        res.status(200).json(admin);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//create a new admin
const createAdmin = async (req, res) => {
    try{
        //hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newAdmin = { 
            email: req.body.email,
            password: hashedPassword,
        }
        const admin = await createAdmin(newAdmin);
        res.status(201).json(admin);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//update an admin
const updateAdmin = async (req, res) => {
    try{
        const { adminId } = req.params;
        const updatedAdmin = req.body;
        const admin = await updateAdmin(adminId, updatedAdmin);
        res.status(200).json(admin);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//delete an admin
const deleteAdmin = async (req, res) => {
    try{
        const { adminId } = req.params;
        const admin = await deleteAdmin(adminId);
        res.status(200).json({message: "Admin deleted successfully"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getAllAdmins,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
}