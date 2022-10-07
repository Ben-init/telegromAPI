const express = require('express');

const messageRouter = require('./../components/message/network'); 
const userRouter = require('./../components/user/network'); 
const chatRouter = require('./../components/chat/network'); 

const Routes = (server) => {
    const router = express.Router();
    server.use('/api/', router);
    router.use('/message', messageRouter);
    router.use('/user', userRouter);
    router.use('/chat', chatRouter);
}

module.exports = Routes;