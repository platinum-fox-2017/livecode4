const express = require('express')
const app = express()

var restaurant=require('./routes/restaurantroute')
var menu=require('./routes/menuroute')
const bodyparser=require('body-parser')
app.locals.helper=require('./helper/')

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('public'))

app.use('/restaurants',restaurant)
app.use('/menus',menu)

app.listen(3000,console.log('port 3000 succes'))
