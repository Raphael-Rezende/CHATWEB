const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const path = require('path');
//const cors = require("cors");
const app = express();


require("dotenv-safe").config();

// modulo express-session para autentificação de usuario:
const expressSession = require('express-session');
// Cofigurando o middleware:
app.use(expressSession({
    secret:'hgoslksjfls',
    resave:false,
    saveUninitialized: false
}))



app.use(express.static(path.join(__dirname, '../app/public')))

app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
 
consign()
    .include('app/routes')
    .then('app/controllers')
    .then('config/dbconfig.js')
    .into(app);

module.exports = app;