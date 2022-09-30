const express = require('express');

const Routes = require('./network/routes');

const app = express();
const port = 3000;

app.use(express.json());

Routes(app);

app.listen(port);

console.log('port:', port);