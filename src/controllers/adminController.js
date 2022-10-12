const bcrypt = require('bcrypt');
const adminService = require('../services/adminService');

//get all admins
const getAllAdmins = async (req, res) => {
    try{
        const admins = await adminService.getAllAdmins();
        res.status(200).json(admins);

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//get one admin
const getAdmin = async (req, res) => {
    try{
        const { adminId } = req.params;
        const admin = await adminService.getAdmin(adminId);
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
            role: "admin"
        }
        const admin = await adminService.createAdmin(newAdmin);
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
        const admin = await adminService.updateAdmin(adminId, updatedAdmin);
        res.status(200).json(admin);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//delete an admin
const deleteAdmin = async (req, res) => {
    try{
        const { adminId } = req.params;
        const admin = await adminService.deleteAdmin(adminId);
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