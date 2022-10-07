const express = require('express');

const response = require('./../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
    const filterUser = req.query.user || null;
    try {
        const chatList = await controller.getAllChat(filterUser);
        response.success(req, res, chatList);
    } catch (error) {
        response.error(req, res, error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const chatList = await controller.getChat(id);
        response.success(req, res, chatList);
    } catch (error) {
        response.error(req, res, error);
    }
})

router.post('/', async (req, res) => {
    try { 
        const { users, message } = req.body
        const newChat = await controller.addChat(users, messages);
        response.success(req, res, newChat, 201);
    } catch (error) {
        response.error(req, res, error);
    }
});

router.patch('/:id', async (req, res) => {
// 
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteChat = await controller.deleteChat(id);
        response.success(req, res, deleteChat);
    } catch (error) {
        response.error(req, res, error);
    }
})

module.exports = router;
