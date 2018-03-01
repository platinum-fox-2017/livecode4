const express = require('express')
const menu = express.Router()
const model = require('../models')
const bodyParser = require('body-parser')

menu.use(bodyParser.json())
menu.use(bodyParser.urlencoded({extended:false}))

menu.get('/', (req, res) => {
    model.Restaurant.findAll({
        order: [['id', 'ASC']]
    }).then(restaurants => {
        // res.send(restaurants)
        model.Menu.findAll()
        .then(foodlist => {
            res.render('menu.ejs', {menus: foodlist, restaurant: restaurants})
        })
    })
})

menu.post('/', (req, res) => {
    // console.log(req.body)
    model.Menu.create({
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.RestaurantId,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(data => {
        console.log(data)
        res.redirect('/menus')
    })
})

menu.get('/:id/edit', (req, res) => {
    // res.send(req.params.id)
    model.Restaurant.findAll()
    .then(restaurants => {
        model.Menu.findById(req.params.id)
        .then(data => {
            let obj = {
                id: data.id,
                name: data.name,
                menu_type: data.menu_type,
                rating: data.rating,
                price: data.price,
                RestaurantId: data.RestaurantId
            }
            res.render('menu-edit.ejs', {menu: obj, restaurant: restaurants})
            res.send(obj)
        })
    })
})

menu.post('/:id/edit', (req, res) => {
    model.Menu.update({
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.RestaurantId
    }, {
        where: {id: req.params.id}
    })
    .then(()=>{
        res.redirect('/menus')
    }) 
})

menu.get('/:id/delete', (req,res) => {
    model.Menu.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((data) => {
        console.log(`${data} record is deleted`)
        res.redirect('/menus')
    })
})

module.exports = menu