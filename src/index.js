// entry point for the application
const app = require('./server');

const PORT = process.env.PORT || 8000;
require('dotenv').config();


//db config
require('./models/conn');

//status
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
