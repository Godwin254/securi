const bcrypt = require('bcrypt');
const adminService = require('../services/adminService');
const jwt = require('jsonwebtoken');

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
        ///register admin
        if(!req.body){
            res.status(400).json({ message: "All inputs must be provided" });
        }

        //check if user already exists
        const oldAdmin = await adminService.getAdminByEmail(req.body.email);

        if(oldAdmin){
            res.status(400).json({ message: "Admin already exists" });
        }
        //hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newAdmin = { 
            email: req.body.email.toLowerCase(),
            password: hashedPassword,
            role: "admin"
        }

        //create admin
        const admin = await adminService.createAdmin(newAdmin);

        //create tokens
        const token = jwt.sign({ 
            admin_id: admin._id,
            email: req.body.email},
            process.env.JWT_TOKEN_SECRET,
            { expiresIn: '2h' }
        );

        //save admin tokens
        admin.token = token;
        //admin
        res.status(201).json(admin);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//login admin
const loginAdmin = async (req, res) => {
    try{
        //login admin
        if(!req.body){
            res.status(400).json({ message: "All inputs must be provided" });
        }

        //check if user already exists
        const admin = await adminService.getAdminByEmail(req.body.email);

        if(!admin){
            res.status(400).json({ message: "Admin does not exist" });
        }

        if (admin && (await bcrypt.compare(req.body.password, admin.password))){
            //create tokens
            const token = jwt.sign({
                admin_id: admin._id,
                email: req.body.email},
                process.env.JWT_TOKEN_SECRET,
                { expiresIn: '2h' }
            );

            //save admin tokens
            admin.token = token;
            //admin
            res.status(200).json(admin);
        }

        res.status(400).json({ message: "Invalid credentials" });
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
    loginAdmin,
    updateAdmin,
    deleteAdmin
}