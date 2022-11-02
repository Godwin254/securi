const bcrypt = require('bcrypt');
const residentService = require('../services/residentService');
const jwt = require('jsonwebtoken');

//get all residents
const getAllResidents = async (req, res) => {
    try{
        const residents = await residentService.getAllResidents();
        res.status(200).json(residents);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//get one resident
const getResident = async (req, res) => {
    try{
        const { residentId } = req.params;
        const resident = await residentService.getResident(residentId);
        res.status(200).json(resident);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//create a new resident
const createResident = async (req, res) => {
    try{
        //register resident
        if(!req.body){
            res.status(400).json({ message: "All inputs must be provided" });
        }

        //check if user already exists
        const oldResident = await residentService.getResidentByEmail(req.body.email);

        if(oldResident){
            res.status(400).json({ message: "Resident already exists" });
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newResident = {
            ...req.body,
            password: hashedPassword
        }

        const resident = await residentService.createResident(newResident);
         //create tokens //token stores user info
        const token = jwt.sign({ 

            //destructure resident info
            //const {} = resident; //data to be included in the token (payload)
            resident_id: resident._id,
            email: req.body.email},
            process.env.JWT_TOKEN_SECRET,
            { expiresIn: '1d' },
            (err, token) => {
                if(err){
                    res.status(500).json({message: err.message});
                }

                // send the token to the client
                //res.status(201).json({token}); //send token to client is not a good practice

            }
        );
        //save resident token (example - remove later)
        resident.token = token;
        //resident
        res.status(201).json(resident);
        
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//login a resident
const loginResident = async (req, res) => {
    try{
        //login resident
        if(!req.body){
            res.status(400).json({ message: "All inputs must be provided" });
        }
        //check if user exists
        const resident = await residentService.getResidentByEmail(req.body.email);

        //check user exist
        if(!resident){
            res.status(400).json({ message: "Resident does not exist" });
        }

        //validate if resident password is correct
        if(resident && (await bcrypt.compare(req.body.password, resident.password))){

            //destructure resident
            const { _id: id, email, password } = resident;
            //create tokens
            const token = jwt.sign(
                { id,email,password},
                process.env.JWT_TOKEN_SECRET,
                { expiresIn: '1d' },
                (err, token) => {
                    if(err){
                        res.status(500).json({message: err.message});
                    }

                    // send the token to the client
                    //res.status(201).json({token}); //send token to client is not a good practice
                }
            );

            //save resident token
            resident.token = token;
            //resident
            res.status(200).json(resident);
        }

        //if user credentials are not correct
        res.status(401).json({ message: "Invalid credentials" });
         
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//update a resident
const updateResident = async (req, res) => {
    try{
        const { residentId } = req.params;
        const updatedResident = req.body;
        const resident = await residentService.updateResident(residentId, updatedResident);
        res.status(200).json(resident);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//delete a resident
const deleteResident = async (req, res) => {
    try{
        const { residentId } = req.params;
        const resident = await residentService.deleteResident(residentId);
        res.status(200).json({message: "Resident deleted successfully"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}


module.exports = {
    getAllResidents,
    getResident,
    createResident,
    loginResident,
    updateResident,
    deleteResident
}