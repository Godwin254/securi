const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const http = require('http');
const socketio = require("socket.io");
require("dotenv").config();
const app = express();
//const server = http.createServer(app);
//const io = socketio(server);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//import routes
require("./src/routes/auth.routes")(app);
require("./src/routes/admin.routes")(app);
require("./src/routes/resident.routes")(app);
require("./src/routes/guard.routes")(app);
require("./src/routes/estate.routes")(app);
require("./src/routes/access.routes")(app);
require("./src/routes/tag.routes")(app);

/*
io.on("connect", (socket) => {
      console.log("user connected");

      socket.on("disconnect", () => {
            console.log("user disconnected");
      });
});

app.get("/", (req, res) => {
      res.send("Hello World");
});

//server
const port = process.env.PORT || 8000;
server.listen(port, () => {
      console.log(`Server is running on port ${port}.`);
})*/

exports.api = functions.https.onRequest(app);