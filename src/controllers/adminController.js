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
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newAdmin = { 
            email: req.body.email.toLowerCase(),
            password: hashedPassword,
            role: "admin"
        }

        //create admin
        const admin = await adminService.createAdmin(newAdmin);

        const {_id:id, email, role} = admin;
        //create tokens
        const token = jwt.sign(
            { id, email, role},
            process.env.JWT_TOKEN_SECRET,
            { expiresIn: '1d' },
            (err, token) => {
                if(err){
                    res.status(500).json({message: err.message})
                }
                // send the token to the client
                //res.status(201).json({token}); //send token to client is not a good practice
                //save admin tokens
                admin.token = token;
                //admin
                res.status(201).json(admin);
            }
        );

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

        const { _id: id, email, role, password } = admin;
        
        if (admin && (await bcrypt.compare(req.body.password, password))){
            //create tokens
            const token = jwt.sign(
                {id, email, role},
                process.env.JWT_TOKEN_SECRET,
                { expiresIn: '1d' },
                (err, token) => {
                    if(err){
                        res.status(500).json({message: err.message})
                    }
                    // send the token to the client
                    //res.status(201).json({token}); //send token to client is not a good practice
                    console.log(token);
                    //save admin tokens
                    admin.token = token;
                }
            );
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