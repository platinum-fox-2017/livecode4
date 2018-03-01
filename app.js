"use strict"

const express = require('express');
const menus = require('./routes/menus');
const restaurants = require('./routes/restaurants');
const bodyParser = require('body-parser')

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.locals.helpers = require('./helpers')

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('wow')
})

app.use('/menus', menus);
app.use('/restaurants', restaurants)

app.listen(PORT, () => {
    console.log('PORT 3000 successfully running');
})