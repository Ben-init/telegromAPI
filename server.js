const express = require('express');

const Routes = require('./network/routes');
const ConnectDB = require('./db');

const app = express();
const port = 3000;

ConnectDB();
app.use(express.json());

Routes(app);

app.use('/app', express.static('./public'));

app.listen(port);

console.log('port:', port);