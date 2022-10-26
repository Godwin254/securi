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
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    houseNo: {
        type: String,
        required: true
    },
    plateNo: {
        type: String,
        required: false
    },
    carColor: {
        type: String,
        required: false
    },
    carImage: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: false,
        default: 'not verified'
    },
    createdAt: {
        type: Date,
        default: () => new Date().toDateString(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => new Date().toDateString()
    },
    fingerID: {
        type: String,
        required: false,
        default: null,
        unique: true
    },
    tagID: {
        type: String,
        required: false,
        default: null,
        unique: true
    },
    token: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Resident", resident);