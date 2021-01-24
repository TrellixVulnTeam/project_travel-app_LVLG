var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios').default;

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Start up an instance of app
const app = express();

// Cors for cross origin allowance
app.use(cors());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('dist'));

app.post('/addData', addData);
app.get('/all', sendData);

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'dist/index.html')
})

console.log(__dirname);

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
};

// Callback function to complete GET '/all'

function sendData(request, response) {
    response.send(projectData);
};

// Post Function

function addData(request, response) {

    let data = request.body;

    console.log('server side data ', data)

    // date -> date
    // temp -> temperature
    // feelings -> user's input

    projectData["date"] = data.date;
    projectData["temp"] = data.temp;
    projectData["feel"] = data.feeling;

    response.send(projectData);
}