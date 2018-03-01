'use strict'

const express = require('express')
const menus = require('./routes/menus')
const index = require('./routes/index')
const models = require('./models');

const bodyParser = require('body-parser')


const app = express()
const port = 3000


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('view engine', 'ejs');



app.use('/', index)
app.use('/menus', menus)

app.locals.helpers = require('./helpers')

app.listen(port, log =>{
  console.log(`App is running on port: ${port}`)
})



