const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const routerIndex = require('./routes/index');
const routerMenu = require('./routes/menu');

app.locals.helpers=require('./helpers/index');

app.use(bodyParser.urlencoded({ extended: false }))

// ROUTES
app.use('/', routerIndex)
app.use('/menus', routerMenu)

app.listen(4000, function(){
    console.log('Aplikasi berjalan di 4000')
})