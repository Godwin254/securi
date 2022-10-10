const Admin = require('../models/Admin');

//get all admins
const getAllAdmins = async () => {
    try{
        const admins = await Admin.find();
        return admins;
    }catch(err){
        throw err;
    }
}

//get one admin
const getAdmin = async (adminId) => {
    try{
        const admin = await Admin.findById(adminId);
        return admin;
    }catch(err){
        throw err;
    }
}

//create a new admin
const createAdmin = async (newAdmin) => {
    try{
        const admin = await Admin.create(newAdmin);
        admin.save();
        return admin;
    }catch(err){
        throw err;
    }

}

//update an admin
const updateAdmin = async (adminId, updatedAdmin) => {
    try{
        const admin = await Admin.findByIdAndUpdate({_id: adminId}, updatedAdmin, {new: true});
        return admin;
    }catch(err){
        throw err;
    }
}

//delete an admin
const deleteAdmin = async (adminId) => {
    try{
        const admin = await Admin.findByIdAndDelete(adminId);
        return admin;
    }catch(err){
        throw err;
    }
}

module.exports = {
    getAllAdmins,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
}