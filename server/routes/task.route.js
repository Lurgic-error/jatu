const express = require('express');

const router = express.Router();

const taskController = require('../controllers/task.controller');

const upload = require('../middlewares/uploads')

router.get('', taskController.getAllTasks)

router.get('/:taskID', taskController.getTask)

router.post('/create', upload.array('attachments', 12), taskController.create)

router.put('/update/:taskID', taskController.update)

router.delete('/delete/:taskID', taskController.delete)

module.exports = router