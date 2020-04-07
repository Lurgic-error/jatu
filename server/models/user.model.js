const mongoose = require('mongoose')

const schema = mongoose.Schema

const user = new schema({

    name: {
        first: {
            type: String,
            required: true,
        },
        middle: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: [true, 'This email is already taken.'],
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", ]
    },
    mobile: [{
        type: Number,
        default: null
    }],
    maritalStatus: {
        type: String,
        default: null,
        enum: ['Single', 'Married', 'Divorced']
    },
    role: {
        type: String,
        default: 'staff',
        enum: ["staff", "admin", "super-admin"],
    },
    position: {
        type: String,
        default: 'Intern'
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
    active: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}, {
    toJSON: {
        virtuals: true
    }
})


module.exports = mongoose.model('User', user);