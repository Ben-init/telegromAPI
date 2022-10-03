const express = require('express');

const response = require('./../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const messageList = await controller.getAllMessage();
        response.success(req, res, messageList);
    } catch (error) {
        response.error(req, res, error, 500, 'UnexpectedError');
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const messageList = await controller.getMessage(id);
        response.success(req, res, messageList);
    } catch (error) {
        response.error(req, res, error, 500, 'UnexpectedError');
    }
})

router.post('/', async (req, res) => {
    try { 
        const { user, message } = req.body
        const newMessage = await controller.addMessage(user, message);
        response.success(req, res, newMessage, 201);
    } catch (error) {
        response.error(req, res, error, 500, 'UnexpectedError');
    }
});

module.exports = router;
