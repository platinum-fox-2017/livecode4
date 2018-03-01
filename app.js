const express = require('express')
const sequelize = require ('sequelize')
const bodyParser = require('body-parser')
const app = express()


app.set('views','./views')
app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))



let menu = require('./routes/menus')
let index = require('./routes/index')
let restaurant = require('./routes/restaurant')


app.use('/',index)
app.use('/menus',menu)
app.use('/restaurants',restaurant)




app.listen(3000, ()=>{
  console.log('AYE AYE CAPT:3000');
})
