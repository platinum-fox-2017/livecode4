const routes = require('express').Router();
const models = require('../models');

routes.get('/', (req,res)=>{
    let err = '';
    models.Restaurant.findAll()
        .then(restaurants => {
            res.render('restaurant.ejs', {restaurants: restaurants});
        })
})

routes.get('/:id/view-menu', (req,res)=>{
    let err = '';
    models.Restaurant.findOne({
        include: [{model: models.Menu}],
        where: {id: req.params.id}
    })
        .then(restaurants => {
            res.render('restaurant-view-menu.ejs', {restaurants: restaurants});
        })
})

routes.get('/restaurant/:id/search', (req,res)=>{
    let err = '';
    let type = req.body.type;
    let keyword = req.body.search;
    let id = req.params.id;
    res.render('restaurant-view-menu-search.ejs', {restaurants: restaurants});
})


module.exports = routes;