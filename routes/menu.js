const routes = require('express').Router();
const models = require('../models');

routes.get('/', (req,res)=>{
    let err = '';
    models.Menu.findAll()
        .then(menus => {
            models.Restaurant.findAll()
                .then(restaurants => {
                    if(req.query.err != ''){
                        err = req.query.err;
                        res.render('menu.ejs', {menus: menus, restaurants: restaurants, err: err});
                    }else{
                        res.render('menu.ejs', {menus: menus, restaurants: restaurants, err: err});
                    }
                    
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
            res.redirect(`/menus?err=${err.message}`)
        })
})

routes.get('/:id/edit', (req,res)=>{
    let err = ''
    models.Menu.findOne({where:{id: req.params.id}})
        .then(menu => {
            menu.getRestaurant()
                .then(restaurant => {
                    if(req.query.err != ''){
                        err = req.query.err;
                        res.render('menu-edit.ejs', {menu: menu, restaurant: restaurant, err: err});
                    }else{
                        res.render('menu-edit.ejs', {menu: menu, restaurant: restaurant, err: err});
                    }
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
        .catch(err => {
            res.redirect(`/menus/${req.params.id}/edit?err=${err.message}`)
        })
})

routes.post('/:id/delete', (req,res)=>{
    models.Menu.destroy({where:{id: req.params.id}})
        .then(menu => {
            res.redirect('/menus')
        })
})

module.exports = routes;



