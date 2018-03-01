const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const models = require('./models');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

const menus = require('./routes/menus');
const restaurants = require('./routes/restaurants');
app.use('/menus', menus);
app.use('/restaurants', restaurants);

app.listen(3000, console.log('Listening to Port 3000'))
