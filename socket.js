const { Server } = require('socket.io');
const socket = {};

const connectIO = (server) => {
    socket.io = new Server(server);
}

module.exports = {
    connectIO,
    socket,
}