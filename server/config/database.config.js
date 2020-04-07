const mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'jatu'; // REPLACE WITH YOUR DB NAME
const uri = `mongodb://${server}/${database}`

// const uri = `mongodb+srv://lurge:watuwewe9090@cholemu-vqlch.mongodb.net/test?retryWrites=true&w=majority`

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(uri, options)
            .then(() => {
                console.log(`Connected to ${database} successfully.`)
            })
            .catch(err => {
                console.error(err)
            })
    }
}

module.exports = new Database();
