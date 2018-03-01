const routes = require('express').Router();
const menu = require('./menu');
const restaurant = require('./restaurant');

routes.get('/', (req,res)=>{
    res.render('index.ejs')
})

routes.use('/menus', menu);
routes.use('/restaurants', restaurant);

module.exports = routes;