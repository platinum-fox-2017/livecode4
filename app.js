const express = require('express')
const app = express()
const PORT = 3000

const bodyParser = require('body-parser')

const index = require('./routes/index')
const menus = require('./routes/menus') 
const restaurants = require('./routes/restaurant')

app.locals.helper = require('./helpers/formatuang.js')
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.use('/', index)
app.use('/menus', menus)
app.use('/restaurants', restaurants)

//Testing
// app.get('/', (req, res) => {
//   res.status(200).json({message: 'Connected!'})
// })

// Server
app.listen(PORT, () => {
  console.log(`connected to PORT ${PORT}`)
})