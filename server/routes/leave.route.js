const express = require('express');

const router = express.Router();

const leaveController = require('../controllers/leave.controller');


router.get('', leaveController.getAllLeaveRequests)

router.get('/:leaveID', leaveController.getLeaveRequest)

router.post('/register', leaveController.create)

router.put('/update/:leaveID', leaveController.update)

router.delete('/delete/:leaveID', leaveController.delete)

module.exports = router