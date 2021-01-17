const express = require("express");
const cors = require("cors");
const http = require("http");
const Message = require('./models/channel.model');
const socketio = require("socket.io");
const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

const server = http.createServer(app);

// Connect to Database
require("./database");

// Use routes
require("./routers")(app);

//Socket IO
require("./socketio");

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

// serve static files
app.use(express.static(__dirname + "/uploads"))

//Run quand qqn se connecte
io.on('connection', socket => {
    console.log('New WebSocket connection');

    socket.on("join", (room, username) => {
        socket.join(room);
        io.to(room).emit('userJoin', username + " a rejoint le chat");
    });

    socket.on('chat', (message, room, {user}) => {
        console.log(message, user.username, " | room: " + room.name);
        io.to(room.name).emit('chatMessage', message, user)
    });

    socket.on('disconnect', () => {
        io.emit('userLeft', "Un utilisateur a quitté le chat");
        socket.disconnect()
    });
});


// Start listening
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
