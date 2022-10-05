const express = require('express');

const response = require('./../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
    const filterUser = req.query.user || null;
    try {
        const userList = await controller.getAllUser(filterUser);
        response.success(req, res, userList);
    } catch (error) {
        response.error(req, res, error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await controller.getUser(id);
        response.success(req, res, user);
    } catch (error) {
        response.error(req, res, error);
    }
})

router.post('/', async (req, res) => {
    try { 
        const newUser = await controller.addUser(req.body);
        response.success(req, res, newUser, 201);
    } catch (error) {
        response.error(req, res, error);
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { description } = req.body;
        const updatedUser = await controller.updateUser(id, description);
        response.success(req, res, updatedUser);
    } catch (error) {
        response.error(req, res, error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await controller.deleteUser(id);
        response.success(req, res, deleteUser);
    } catch (error) {
        response.error(req, res, error);
    }
})

module.exports = router;
