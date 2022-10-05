const express = require('express');

const messageRouter = require('./../components/message/network'); 
const userRouter = require('./../components/user/network'); 

const Routes = (server) => {
    const router = express.Router();
    server.use('/api/', router);
    router.use('/message', messageRouter);
    router.use('/user', userRouter);
}

module.exports = Routes;