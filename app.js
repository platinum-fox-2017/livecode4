const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const menus = require('./routes/menus')
const resto = require('./routes/restaurants')



app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'ejs');
app.use('/menus',menus)
app.use('/restaurants',resto)


app.listen(3000, () => console.log('connected!'))