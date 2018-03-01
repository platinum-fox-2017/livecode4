const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const router = require('./routes/index');
const menus = require('./routes/menus');
const restaurants = require('./routes/restaurants');


app.set('views', __dirname+'/views/');
app.set('view engine', 'ejs');

app.locals.helper = require('./helpers/index');

//body parser
app.use(bodyParser.urlencoded({
  extended: false
}))



//routes
// app.use('/', router);
app.use('/menus',menus);
app.use('/restaurants',restaurants);



const port = 3000;

app.listen(port, function() {
  console.log(`Server Starts on ${port}`);
});
