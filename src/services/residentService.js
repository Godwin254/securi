const Resident = require('../models/Resident');

//get all residents
const getAllResidents = async () => {
    try{
        const residents = await Resident.find();
        return residents;
    }catch(err){
        throw err;
    }

}

//get resident by email
const getResidentByEmail = async (email) => {
    try{
        const resident = await Resident.findOne({email: email});
        return resident;
    }catch(err){
        throw err;
    }
}

//get one resident
const getResident = async (residentId) => {
    try{
        const resident = await Resident.findById(residentId);
        return resident;
    }catch(err){
        throw err;
    }
}

//create a new resident
const createResident = async (newResident) => {
    try{
        const resident = await Resident.create(newResident);
        resident.save();
        return resident;
    }catch(err){
        throw err;
    }
}

//update a resident
const updateResident = async (residentId, updatedResident) => {
    try{
        const resident = await Resident.findByIdAndUpdate({_id: residentId}, updatedResident, {new: true});
        return resident;
    }catch(err){
        throw err;
    }
}

//delete a resident
const deleteResident = async (residentId) => {
    try{
        const resident = await Resident.findByIdAndDelete(residentId);
        return resident;
    }catch(err){
        throw err;
    }
}

module.exports = {
    getAllResidents,
    getResidentByEmail,
    getResident,
    createResident,
    updateResident,
    deleteResident
}