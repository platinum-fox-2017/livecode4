const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const routes = require('./routes');
const routesMenu = require('./routes/menu');
const routesResturant = require('./routes/restaurant');

const app = express();

app.locals.helper = require('./helpers');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use('/', routes);
app.use('/menus', routesMenu);
app.use('/restaurants', routesResturant);


app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}..`);
})
