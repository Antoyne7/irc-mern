import io from 'socket.io-client';
import param from "../services/param";

let socket;
export const initiateSocket = (channel) => {
    socket = io(param.HOST);
    console.log(`Connecting socket...`);
    if (socket && channel) {
        console.log("Emitting...");
        socket.emit('join', channel.name)
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
export const sendMessage = (room, message) => {
    if (socket) socket.emit('chat', {message, room});
};