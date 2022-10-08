const express = require('express');
const app = express();
const server = require('http').createServer(app);

const Routes = require('./network/routes');
const ConnectDB = require('./db');
const { connectIO, socket } = require('./socket');

const port = 3000;

ConnectDB();

app.use(express.json());

connectIO(server);

socket.io.on('connection', () => {
    console.log('a user connected');
})


Routes(app);

app.use('/app', express.static('./public'));

server.listen(port, () => {
    console.log('port:', port);
});
