const mongoose = require('mongoose');
const adminSchema = mongoose.Schema;

const admin = new adminSchema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Admin", admin);

