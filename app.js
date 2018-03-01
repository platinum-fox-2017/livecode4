const express = require('express')
const app = express()

// Body-Parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

// View Engine
app.set('view engine', 'ejs')

// Routing
const Home = require('./routes/index')
const Restaurant = require('./routes/restaurant')
const Menu = require('./routes/menu')

app.use('/', Home)
app.use('/restaurant', Restaurant)
app.use('/menu', Menu)

app.listen(3000 , ()=>{
    console.log(`Welcome Abroad`)
})