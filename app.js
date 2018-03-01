'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));

const index = require('./routes/index')
const menu = require('./routes/menu')
const restaurant = require('./routes/restaurant')

app.use('/', index)
app.use('/menus', menu)
app.use('/restaurants', restaurant)


app.listen(3000, () => {
    console.log('App is now listening on port 3000');
})