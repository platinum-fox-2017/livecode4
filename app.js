'use strict'

const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const home            = require('./routers/home');
const menu            = require('./routers/menu');
const restaurant      = require('./routers/restaurant');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/', home)
app.use('/menus',menu)
app.use('/restaurants',restaurant)

app.listen(3000, console.log(`Ready.. Set.. GO!`))
