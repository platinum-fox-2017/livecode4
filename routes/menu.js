const routes = require('express').Router();
const models = require('../models');

routes.get('/', (req,res)=>{
    models.Menu.findAll()
        .then(menus => {
            models.Restaurant.findAll()
                .then(restaurants => {
                    res.render('menu.ejs', {menus: menus, restaurants: restaurants});
                })
        })
})

routes.post('/', (req,res)=>{
    let obj = {
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.RestaurantId
    }
    models.Menu.create(obj)
        .then(()=>{
            res.redirect('/menus');
        })
        .catch(err=>{
            console.log(err)
        })
})

routes.get('/:id/edit', (req,res)=>{
    models.Menu.findOne({where:{id: req.params.id}})
        .then(menu => {
            menu.getRestaurant()
                .then(restaurant => {
                    res.render('menu-edit.ejs', {menu: menu, restaurant: restaurant});
                })
        })
})

routes.post('/:id/edit', (req,res)=>{
    let obj = {
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.RestaurantId
    }
    models.Menu.update(obj, {where:{id: req.params.id}})
        .then(menu => {
            res.redirect('/menus')
        })
})

routes.post('/:id/delete', (req,res)=>{
    models.Menu.destroy({where:{id: req.params.id}})
        .then(menu => {
            res.redirect('/menus')
        })
})

module.exports = routes;



