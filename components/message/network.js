const express = require('express');
const multer = require('multer');

const response = require('./../../network/response');
const controller = require('./controller');

const router = express.Router();
const upload = multer({
    dest: 'public/files/',
})

router.get('/', async (req, res) => {
    const filterUser = req.query.user || null;
    try {
        const messageList = await controller.getAllMessage(filterUser);
        response.success(req, res, messageList);
    } catch (error) {
        response.error(req, res, error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const messageList = await controller.getMessage(id);
        response.success(req, res, messageList);
    } catch (error) {
        response.error(req, res, error);
    }
})

router.post('/', upload.single('file'), async (req, res) => {
    try { 
        const file = req.file;
        const { user, chat, message } = req.body;
        const newMessage = await controller.addMessage(user, chat, message, file);
        response.success(req, res, newMessage, 201);
    } catch (error) {
        response.error(req, res, error);
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { message } = req.body;
        const updatedMessage = await controller.updateMessage(id, message);
        response.success(req, res, updatedMessage);
    } catch (error) {
        response.error(req, res, error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteMessage = await controller.deleteMessage(id);
        response.success(req, res, deleteMessage);
    } catch (error) {
        response.error(req, res, error);
    }
})

module.exports = router;
