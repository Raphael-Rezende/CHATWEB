const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, '../app/public')))

app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .into(app);

module.exports = app;