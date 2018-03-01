const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

// app.get('/', (req, res) => res.send('Hello World!'))
const menuRoutes = require('./routes/menu')
const RestaurantRoutes = require('./routes/restaurant')
app.use('/menus', menuRoutes)
app.use('/restaurants', RestaurantRoutes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
