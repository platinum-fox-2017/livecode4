"use strict"
const express = require('express');
const model = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op


const restaurants = express.Router();

restaurants.get('/', (req, res) => {
    model.Restaurant.findAll()
    .then(data => {
        res.render('restaurants', {restaurants: data})
    })
    .catch(err => console.log(err))
});

restaurants.get('/:id/view_menu', (req, res) => {
    let id = req.params.id;
    let type = req.query.order
    let name = req.query.name
    model.Menu.findAll({
        where:{
            [type]: {
                [Op.iLike]: `%${name}%`
            }
        },
        order: [[`id`,'ASC']]
    })
    .then(menus => {
        model.Restaurant.findById(id)
        .then(restaurant => {
            res.render('restaurantsMenu', {restaurant:restaurant, menus:menus})
        })
    })
    // res.send(id)
})

restaurants.post('/:id/view_menu', (req, res) => {
    let id = req.params.id
    let order = req.body.orderBy
    let name = req.body.name
    //view_menu?order=req.body.order
    res.redirect(`/restaurants/${id}/view_menu?order=${order}&name=${name}`)
})

module.exports = restaurants;