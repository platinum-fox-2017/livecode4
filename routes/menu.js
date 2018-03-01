const models = require('../models')
const routes = require('express').Router()

routes.get('/',(req,res) => {
    if (!req.query.err) {
        let err =''
        models.Menu.findAll({
            include : {model : models.Restaurant},
            order: [
                ['id','ASC']
            ]
        })
        .then(menus=>{
            models.Restaurant.findAll()
            .then(restaurants=> {
                res.render('menus',{menus:menus, restaurants:restaurants,err:err})
            })
            .catch(err=>{
                res.send(err)
            })
        })
        .catch(err=>{
            res.send(err)
        })
    } else {
        let err = req.query.err 
        models.Menu.findAll({
            include : {model : models.Restaurant},
            order: [
                ['id','ASC']
            ]
        })
        .then(menus=>{
            models.Restaurant.findAll()
            .then(restaurants=> {
                res.render('menus',{menus:menus, restaurants:restaurants,err:err})
            })
            .catch(err=>{
                res.send(err)
            })
        })
        .catch(err=>{
            res.send(err)
        })
    }
})

routes.post('/',(req,res) => {
    models.Menu.create({
        name : req.body.name,
        menu_type : req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId : req.body.restaurant
    })
    .then(() => {
        res.redirect('/menus')
    })
    .catch(err => {
        res.redirect(`/menus?err=${err.message}`)
    })
})

routes.get('/:id/edit',(req,res) => {
    if (!req.query.err) {
        let err = ''
        models.Menu.findOne({
            where : {id : req.params.id},
        })
        .then(menu => {
            models.Restaurant.findAll()
            .then(restaurants => {
                res.render('edit_menus',{menu:menu,restaurants:restaurants, err:err})
            })
            .catch(err => {
                res.send(err)
            })
        })
        .catch(err => {
            res.send(err)
        })
    } else {
        let err = req.query.err
        models.Menu.findOne({
            where : {id : req.params.id},
        })
        .then(menu => {
            models.Restaurant.findAll()
            .then(restaurants => {
                res.render('edit_menus',{menu:menu,restaurants:restaurants, err:err})
            })
            .catch(err => {
                res.send(err)
            })
        })
        .catch(err => {
            res.send(err)
        })
    }
})

routes.post('/:id/edit',(req,res) => {
    models.Menu.findOne({
        where : { id : req.params.id}
    })
    .then(menu => {
        menu.update({
            name : req.body.name,
            menu_type : req.body.menu_type,
            rating: req.body.rating,
            price: req.body.price,
            RestaurantId : req.body.restaurant
        })
        .then(()=>{
            res.redirect('/menus')
        })
        .catch(err => {
            res.redirect(`/menus/${req.params.id}/edit?err=${err.message}`)
        })
    })
    .catch(err => {
        // res.send(err)
        res.redirect(`/menus/${req.params.id}/edit?err=${err.message}`)
    })


    // models.Menu.update({
    //     name : req.body.name,
    //     menu_type : req.body.menu_type,
    //     rating: req.body.rating,
    //     price: req.body.price,
    //     RestaurantId : req.body.restaurant
    // },
    // {
    //     where : { id : req.params.id}
    // })
    // .then(()=>{
    //     res.redirect('/menus')
    // })
    // .catch(err => {
    //     // res.send(err)
    //     res.redirect(`/menus/${req.params.id}/edit?err=${err.message}`)
    // })
})

routes.get('/:id/delete',(req,res) => {
    models.Menu.destroy({
        where : {id : req.params.id}
    })
    .then(() =>{
        res.redirect('/menus')
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = routes;