const express = require('express');

const router = express.Router();

const userRoutes  = require('./user.route')

router.use('/users', userRoutes)

router.get('', function(req,res,next) {
    res.send('welcome to jatu')
})


module.exports = router