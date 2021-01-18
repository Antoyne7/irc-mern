const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
};

const server = http.createServer(app);

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// serve static files
app.use(express.static(__dirname + "/uploads"));

// Connect to Database
require("./database");

// Use routes
require("./routers")(app);

//Socket IO
require("./socketio")(server);

// Start listening
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
