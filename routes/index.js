const routes = require('express').Router();
const menu = require('./menu');

routes.get('/', (req,res)=>{
    res.render('index.ejs')
})

routes.use('/menus', menu);

module.exports = routes;