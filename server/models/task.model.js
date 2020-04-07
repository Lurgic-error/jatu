const mongoose = require('mongoose');

const schema =  mongoose.Schema

const  task = new schema({

    name:{
        type:String,
        required:true
    },

    details:{
        type:String
    },

    assignedTo: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    doneBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },

    attachments:[{
        type:String
    }]
})

module.exports = mongoose.model('Task', task)