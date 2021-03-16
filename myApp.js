var express = require('express');
var app = express();

console.log("Hello World" );

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

/*app.get('/', (req, res) => {
    res.send('Response String');
});*/
































 module.exports = app;
