const socketio = require("socket.io");
const Channel = require("../models/channel.model")

module.exports = function (server) {

    const io = socketio(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    });

//Run quand qqn se connecte
    io.on('connection', socket => {
        console.log('New WebSocket connection');

        socket.on("join", (room, username) => {
            socket.join(room);
            io.to(room).emit('userJoin', username + " a rejoint le chat");
        });

        socket.on('chat', (message, room, user) => {
            console.log(message, user.username, " | room: " + room.name);
            if (message.length > 0) {
                findChannel(room).then(channel => {
                    channel.messages.push({message, user: user._id});
                    channel.save(err => {
                        if (err) {
                            console.log(err)
                        }
                    })
                }).catch(err => console.log(err));
                io.to(room.name).emit('chatMessage', message, user)
            }
        });

        socket.on('disconnect', () => {
            io.emit('userLeft', "Un utilisateur a quitté le chat");
            socket.disconnect()
        });
    });
};

async function findChannel(room) {
    return Channel.findById(room._id).exec()
}