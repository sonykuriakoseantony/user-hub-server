const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

//----------------Users CRUD-------------------
// add users
router.post('/user/add', userController.addUserController);

// update users
router.put('/user/:id/update', userController.updateUserController);

// delete users
router.delete('/user/:id/delete', userController.removeUserController);

// get all users
router.get('/users', userController.getAllUsersController);

module.exports = router;