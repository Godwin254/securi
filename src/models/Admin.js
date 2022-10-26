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
    },
    createAt: {
        type: Date,
        default: () => new Date().toLocaleDateString(),
        immutable: true
    },
    updateAt: {
        type: Date,
        default: () => new Date().toLocaleDateString()
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model("Admin", admin);

