const dayjs = require('dayjs')
const socketio = require("socket.io");
const Channel = require("../models/channel.model")
let users = [];

module.exports = function (server) {

    const io = socketio(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    });


//Run quand qqn se connecte
    io.on('connection', socket => {
        console.log('New WebSocket connection, ID is ' + socket.id);

        socket.on("join", (room, username) => {
            // let userIndex = users.findIndex(user => user.username === username);
            // const userVerif = users[userIndex];
            // if (userIndex > -1) {
            //     users.splice(userIndex, 1);
            // }
            // users.push({id: socket.id, username, room, joinTime: dayjs().add(10, 'second')});
            // socket.join(room);
            // if (userVerif) {
            //     if (userVerif.leftTime.isBefore(dayjs(new Date()))) {
            //         io.to(room).emit('userJoin', username + " a rejoint le chat");
            //     }
            // } else {
            //     io.to(room).emit('userJoin', username + " a rejoint le chat");
            // }

            users.push({id: socket.id, username, room});
            socket.join(room);
            io.to(room).emit('userJoin', username + " a rejoint le chat");
        });

        socket.on('chat', (message, room, user) => {
            console.log(message, user.username, " | room: " + room.name)
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
            // const userIndex = users.findIndex(user => user.id == socket.id);
            // let userLeft = users[userIndex];
            // if (userLeft) {
            //     users[userIndex].leftTime = dayjs().add(10, "second");
            //     if (userLeft.joinTime.isBefore(dayjs(new Date()))) {
            //         io.to(userLeft.room).emit('userLeft', `${userLeft.username} a quitté le chat.`);
            //     }
            // }
            // socket.disconnect();
            const userLeft = users.find(user => user.id == socket.id);
            if (userLeft) {
                io.to(userLeft.room).emit('userLeft', `${userLeft.username} a quitté le chat.`);
            }
            socket.disconnect();
        });
    });

    const findChannel = async (room) => {
        return Channel.findById(room._id).exec()
    };
};
