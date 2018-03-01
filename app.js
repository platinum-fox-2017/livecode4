'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//set EJS
app.set('view engine', 'ejs');

//SET Body Parser
app.use(bodyParser.urlencoded({ extended: false }))

//SET Helper
app.locals.helpers = require('./helpers')

//MIDDLEWERE ke routes
app.use('/', require('./routes'));

app.listen(PORT, () => {
    console.log(`Aplikasi live-coding4 ini berjalan di port: ${PORT}`)
})

