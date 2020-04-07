const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');


router.get('', userController.getAllUsers)

router.get('/:userID', userController.getUser)

router.post('/register', userController.create)

router.put('/update/:userID', userController.update)

router.delete('/delete/:userID', userController.delete)

module.exports = router