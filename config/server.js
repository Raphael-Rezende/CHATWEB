var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var path = require('path')


const io = require('socket.io')(app);

var app = express();
console.log(path.join(__dirname, './app/views'))

app.use(express.static(path.join(__dirname, './app/views')));

app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;