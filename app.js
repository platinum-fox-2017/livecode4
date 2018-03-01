const express = require('express')
const bodyParser = require('body-parser')
const index = require('./routes/index.js')
const menus = require('./routes/menus.js')
const restaurants = require('./routes/restaurant.js')

const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', index)
app.use('/menus', menus)
app.use('/restaurants', restaurants)
app.listen(3000);
console.log('check....');