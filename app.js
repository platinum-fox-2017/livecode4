const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes_home = require('./routes/home');
const routes_menu = require('./routes/menu');

app.use('/',routes_home);
app.use('/menus',routes_menu);

app.listen(3000);