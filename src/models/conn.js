//mongodb configuration
const mongoose = require('mongoose');
const db = mongoose.connection;
const DB_URL = process.env.MONGO_URI;
require('dotenv').config();

//connect to db
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//db connection status
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to db");

});

//export db
module.exports = db;