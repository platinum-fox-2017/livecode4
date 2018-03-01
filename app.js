const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
var app = express()

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:false}))

app.locals.helper = require('./helpers/index.js')

app.use('/',routes)

app.listen(3000,()=>{
  console.log('3000 masuk')
})
