const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const models = require('./models');

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}));

const menu = require('./routes/menu')
const restaurant = require('./routes/restaurant')

app.get('/', (req, res) => {
    res.send('Hello Word')
});

app.use('/menus', menu);
app.use('/restaurants', restaurant);

app.listen(3000, () => console.log(`The App listening on port 3000!`));