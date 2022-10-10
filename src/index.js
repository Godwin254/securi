// entry point
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv').config();


//server config
require('./server')
//db config
require('./models/conn');


//middlewares
app.use(bodyParser.json());

//import routes
const adminRoutes = require('./routes/adminRoutes');

//route config
app.use('/api/admins', adminRoutes);
