'use strict'
const router = require('express').Router();
const Models = require('../models')

router.get('/', (req,res) => {
    Models.Menu.findAll({
        include: [{model: Models.Restaurant}]
    })
    .then(menus => {
        Models.Restaurant.findAll()
        .then(restaurant => {
            res.render('../views/menu/listMenu.ejs', {menus: menus, restaurant:restaurant, err:null})
            // res.send(menus)
        })
        .catch(err => {
            res.redirect('../views/menu/listMenu.ejs', {menus:menus, restaurant:restaurant, err: err.message});
        })
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/:id/edit', (req, res) => {
    Models.Menu.findById(req.params.id)
    .then((menu) => {
        Models.Restaurant.findAll()
        .then(restaurant => {
            res.render('./menu/editMenu.ejs', {menu: menu, restaurant:restaurant})
        })
        .catch(err => {
            res.send(err)
        })   
    })
    .catch((err) => {
        res.send(err);
    })
})

router.post('/:id/edit', (req,res) => {
    let obj = {
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.RestaurantId,
    }
    Models.Menu.update(
        obj,
        {where: {id: req.params.id}}
    )
    .then((Menus) => {
        res.redirect('/menus')
    })
    .catch((err) => {
        res.send(err);
    })
})

router.get('/:id/delete', (req, res) => {
    Models.Menu.destroy(
        {where: {id: req.params.id}}
    )
    .then((items) => {
        res.redirect('/menus')
    })
    .catch((err) => {
        res.send(err);
    })
    // res.send('form input delete');
})

router.post('/', (req,res) => {
    let obj = {
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.RestaurantId,
    }
    Models.Menu.create(obj)
    .then((menu) => {
        res.redirect('/menus')
    })
    .catch((err) => {
        res.render('../views/menu/listMenu.ejs', {err: err.message});
    })
    // res.send(req.body);
})

module.exports = router