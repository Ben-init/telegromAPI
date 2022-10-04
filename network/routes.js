const express = require('express');

const messageRouter = require('./../components/message/network'); 

const Routes = (server) => {
    const router = express.Router();
    server.use('/api/', router);
    router.use('/message', messageRouter);
}

module.exports = Routes;