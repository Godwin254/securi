const express = require("express");
const cors = require("cors");
const morgan = require('morgan');

const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
      req.io = io; // Attach the io object to the request
      next();
});

// import routes
require("./src/routes/auth.routes")(app);
require("./src/routes/admin.routes")(app);
require("./src/routes/resident.routes")(app);
require("./src/routes/guard.routes")(app);
require("./src/routes/estate.routes")(app);
require("./src/routes/access.routes")(app);
require("./src/routes/tag.routes")(app);
require("./src/routes/fingerprint.routes")(app);


io.on("connect", (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Hello World from Brown's server.");
});

const port = process.env.PORT || 8000;
server.listen(port,'localhost', () => {
  console.log(`Server is running on:  http://localhost:${port}`);
});

server.listen(port,'0.0.0.0', () => {
      console.log(`Global access on: http://102.220.230.247:${port}`);
});


