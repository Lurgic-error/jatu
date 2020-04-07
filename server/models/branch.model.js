const mongoose = require('mongoose')

const schema = mongoose.Schema

const  branch = new schema({
    
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    address: {
        region: {
            type: String,
            default: null
        },
        district: {
            type: String,
            default: null
        },
        ward: {
            type: String,
            default: null
        },
    },

    departments:[
        {
            name:{
                type:String
            },
            hod:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            members:[{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }]
        }
    ]
})

module.exports = mongoose.model('Branch', branch)

