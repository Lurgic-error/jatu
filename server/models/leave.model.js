const mongoose = require('mongoose')

const schema = mongoose.Schema

const leave = new schema({

    approvedBy: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    requestBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    duration:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Leave', leave)