const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const morgan = require('morgan');

require('./config/database.config')

// Initialize the whole server
const app = express();

// Import Routes
const mainRoute = require('./routes/index');

// Use cors for  cross site scripting
app.use(cors());


// Middleware
app.use(express.static('public'))

// Morgan for logging all requests and responses
app.use(morgan('dev'))

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
    extended: true
}));


// Parse x-forms etc
app.use(bodyParser.json());

// Setting http headers
// app.use(header.setheaders)

// Main Route
app.use('', mainRoute);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public/'))

    //handle SPA
    app.get(/.*/, (req,res)=> res.sendFile(__dirname + 'public/index.html'))
}

// Error Handler
app.use((req, res, next) => {
    const error = new Error("App error handler: Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
})




let port =  process.env.PORT || 2300;

app.listen(port, () => console.log(`################################################\n 🔥🛡️ Server listening on port: ${port} 🛡️🔥 \n################################################  \nKitu Kimepop`));
