const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');


const { config } = require('./config');
const Routes = require('./network/routes');
const ConnectDB = require('./db');
const { connectIO, socket } = require('./socket');

const port = 3000;

ConnectDB();
app.use(cors());
app.use(express.json());

connectIO(server);

socket.io.on('connection', () => {
    console.log('a user connected');
})


Routes(app);

app.use('/app', express.static('./public'));

server.listen(config.port, () => {
    console.log('port:', port);
});
