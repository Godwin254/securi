//app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');



//middlewares
app.use(bodyParser.json());
app.use(cors());    

//import routes
const adminRoutes = require('./routes/adminRoutes');

//route config
app.use('/api/admins', adminRoutes);



//test server running
app.get('/api', (req, res) => {
    res.send("<h1>Dev server started</h1>")
});

module.exports = app;