const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const {Server} = require('socket.io');
require("dotenv").config();
const app = express();

const corsOptions = {
      //all origins
      origin: "*",
      allowedHeaders: ["Content-Type", "Authorization"],
}

app.use(cors(corsOptions));
app.use(express.json());


//import routes
require("./src/routes/auth.routes")(app);
require("./src/routes/admin.routes")(app);
require("./src/routes/resident.routes")(app);
require("./src/routes/guard.routes")(app);
require("./src/routes/estate.routes")(app);
require("./src/routes/access.routes")(app);
require("./src/routes/tag.routes")(app);




exports.api = functions.https.onRequest(app);