const express = require('express');

const router = express.Router();

const userRoutes  = require('./user.route')

const companyRoutes  = require('./company.route')

const branchRoutes  = require('./branch.route')

const leaveRoutes  = require('./leave.route')

const taskRoutes  = require('./task.route')

router.use('/users', userRoutes)

router.use('/companies', companyRoutes)

router.use('/branches', branchRoutes)

router.use('/tasks', taskRoutes)

router.use('/leave', leaveRoutes)

router.get('', function(req,res,next) {
    res.send('welcome to jatu')
})


module.exports = router