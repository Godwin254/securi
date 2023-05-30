const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

//import routes
require("./src/routes/auth.routes")(app);
require("./src/routes/admin.routes")(app);
require("./src/routes/resident.routes")(app);
require("./src/routes/member.routes")(app);
require("./src/routes/hardware.routes")(app);
require("./src/routes/guard.routes")(app);


exports.api = functions.https.onRequest(app);
