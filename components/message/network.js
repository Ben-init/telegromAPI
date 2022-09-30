const express = require('express');

const response = require('./../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    response.success(req, res, 'lista de mensajes');
})

router.post('/', (req, res) => {
    try { 
        const { user, message } = req.body
        const newMessage = controller.addMessage(user, message);
        response.success(req, res, newMessage, 201);
    } catch (error) {
        response.error(req, res, error, 500, 'post error');
    }
});

module.exports = router;
