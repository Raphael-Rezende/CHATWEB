var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var path = require('path')


var app = express();

app.use(express.static(path.join(__dirname, '../app/public')))

app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .into(app);

module.exports = app;