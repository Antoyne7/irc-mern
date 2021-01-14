const express = require("express");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");
const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));


//Run quand qqn se connecte
io.on('connection', socket => {
    console.log('New WebSocket connection');

    socket.on("join", (data, username) => {
        console.log("qqn rejoint !")
        io.emit('userJoin', username + " a rejoint le chat");
    });

    socket.on('disconnect', () => {
        io.emit('userLeft', "Un utilisateur a quitté le chat");
        socket.disconnect()
    });

    socket.on('chatMessage', (msg) => {
        io.emit('message', msg)
    })
});

// Connect to Database
require("./database");

// Use routes
require("./routers")(app);

//Socket IO
require("./socketio");


// Start listening
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
