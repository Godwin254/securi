//app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const auth = require('./middleware/auth');
const session = require('express-session');
const cookieParser = require('cookie-parser');



//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//let session;


//import routes
const adminRoutes = require('./routes/adminRoutes');
const residentRoutes = require('./routes/residentRoutes');

//route config
app.use('/api/admins', adminRoutes);
app.use('/api/residents', residentRoutes);

//static files
app.use('/', express.static(path.join(__dirname, '../client/build')));


//test server running
app.get('/welcome',auth, (req, res) => {
    res.send("<h1>Dev server started</h1>")
});


module.exports = app;