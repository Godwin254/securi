// entry point
const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();


//middlewares
app.use(bodyParser.json());

//import routes
const adminRoutes = require('./routes/adminRoutes');

//route config
app.use('/api/admins', adminRoutes);

//db config

app.get('/', (req, res) => {
    res.send("<h1>Dev server started</h1>")
})

//status
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));