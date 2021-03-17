var express = require('express');
var app = express();
require('dotenv').config();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

console.log("Hello World" );

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

/*app.get('/', (req, res) => {
    res.send('Response String');
});*/

/*app.get('/json', (req, res) => {
    res.json({"message": "Hello json"});
});*/

app.get('/json', (req, res) => {
    let jsonResponse = {"message": "Hello json"};
    
    if (process.env.MESSAGE_STYLE === "uppercase") {
        jsonResponse.message = jsonResponse.message.toUpperCase();
    }
    
    res.json(jsonResponse);
    
});

function getCurrentTime() {
    return new Date().toString();
}

app.get('/now', (req, res, next) => {
    req.time = getCurrentTime();
    next();
}, (req, res) => {
    res.json({time: req.time})
});








 module.exports = app;
