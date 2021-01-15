import io from 'socket.io-client';
import param from "../services/param";

export let socket;

export const initiateSocket = (channel, username) => {
    socket = io(param.HOST);
    console.log(`Connecting socket...`);
    if (socket && channel) {
        socket.emit('join', channel.name, username)
    }

};

export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if (socket) socket.disconnect();
};
export const subscribeToChat = (cb) => {
    if (!socket) return true;
    socket.on('chat', msg => {
        console.log('Websocket event received!');
        return cb(null, msg);
    });
};
export const socketSendMessage = (room, message, user) => {
    if (socket) socket.emit('chat', message, room, user);
};
