const models = require('../models')
const routes = require('express').Router()
const Op        = require('sequelize').Op;

routes.get('/',(req,res) => {
    models.Restaurant.findAll()
    .then(restaurants => {
        res.render('restaurants',{restaurants:restaurants})
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/:id/view_menu',(req,res) => {
    models.Restaurant.findOne({
        where : {id : req.params.id}
    })
    .then(restaurant => {
        restaurant.getMenus()
        .then(assocMenus => {
            res.render('restaurant_detail',{restaurant:restaurant, assocMenus : assocMenus})
        })
    })
    .catch(err=>{
        res.send(err)
    })
})

routes.post('/:id/search',(req,res) => {
    if(req.body.keyword_type == "name") {
        models.Menu.findAll({
            where : {
                RestaurantId : req.params.id,
                name         : {[Op.iLike] : '%'+req.body.keyword+'%'}
            },
            include : {
                model : models.Restaurant
            }
        })
        .then(menus=>{
            models.Restaurant.findOne({
                where : {id : req.params.id}
            })
            .then(restaurant => {
                res.render('restaurant_search', {menus : menus,restaurant:restaurant})
            })
            .catch(err => {
                res.send(err);
            })
        })
        .catch(err=>{
            res.send(err)
        })
    } else if (req.body.keyword_type == "menu_type") {
        models.Menu.findAll({
            where : {
                RestaurantId : req.params.id,
                menu_type         : {[Op.iLike] : '%'+req.body.keyword+'%'}
            },
            include : {
                model : models.Restaurant
            }
        })
        .then(menus=>{
            models.Restaurant.findOne({
                where : {id : req.params.id}
            })
            .then(restaurant => {
                res.render('restaurant_search', {menus : menus,restaurant:restaurant})
            })
            .catch(err => {
                res.send(err);
            })
        })
        .catch(err=>{
            res.send(err)
        })
    } else if (req.body.keyword_type == "price") {
        models.Menu.findAll({
            where : {
                RestaurantId : req.params.id,
                price         : req.body.keyword
            },
            include : {
                model : models.Restaurant
            }
        })
        .then(menus=>{
            models.Restaurant.findOne({
                where : {id : req.params.id}
            })
            .then(restaurant => {
                res.render('restaurant_search', {menus : menus,restaurant:restaurant})
            })
            .catch(err => {
                res.send(err);
            })
        })
        .catch(err=>{
            res.send(err)
        })
    } else if (req.body.keyword_type == "rating") {
        models.Menu.findAll({
            where : {
                RestaurantId : req.params.id,
                rating         : req.body.keyword
            },
            include : {
                model : models.Restaurant
            }
        })
        .then(menus=>{
            models.Restaurant.findOne({
                where : {id : req.params.id}
            })
            .then(restaurant => {
                res.render('restaurant_search', {menus : menus,restaurant:restaurant})
            })
            .catch(err => {
                res.send(err);
            })
        })
        .catch(err=>{
            res.send(err)
        })
    }
})

module.exports = routes;