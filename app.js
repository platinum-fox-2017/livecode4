const express = require('express')
const app = express()
const RouterMenu = require('./routes/menu')
const RouterRestaurant = require('./routes/restaurant')
const bodyParser = require('body-parser')


app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/menus',RouterMenu)
app.use('/restaurants',RouterRestaurant)


//----------------Home ------------------
app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000,console.log('server oke bos !'))
