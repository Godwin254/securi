const mongoose = require('mongoose');
const memberSchema = mongoose.Schema;

const member = new memberSchema({
    residentId: {
        //reference to resident
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resident',
        required: true
    },
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
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    relationship: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    fingerID: {
        type: String,
        required: false,
        default: null,
        unique: true
    }
});

module.exports = mongoose.model("Member", member);
