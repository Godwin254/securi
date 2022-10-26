//app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const auth = require('./middleware/auth');



//middlewares
app.use(bodyParser.json());
app.use(cors());    

//import routes
const adminRoutes = require('./routes/adminRoutes');
const residentRoutes = require('./routes/residentRoutes');

//route config
app.use('/api/admins', adminRoutes);
app.use('/api/residents', residentRoutes);

//static files
app.use('/', express.static(path.join(__dirname, '../client/build')));


//test server running
app.get('/api',auth, (req, res) => {
    res.send("<h1>Dev server started</h1>")
});


module.exports = app;