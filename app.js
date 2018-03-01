const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const models = require('./models');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.locals.helper = require('./helper/')

const menu = require('./routes/menu.js');
const restaurant = require('./routes/restaurant.js')

app.use('/menus', menu);
app.use('/restaurants', restaurant);

app.listen(3000, console.log('AYE AYE CAPTAIN!'))
