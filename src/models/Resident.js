const mongoose = require('mongoose')
const residentSchema = mongoose.Schema;

const resident = new residentSchema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
});