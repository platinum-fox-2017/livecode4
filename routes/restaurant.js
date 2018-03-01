const express = require('express')
const restaurant = express.Router()
const model = require('../models')
const bodyParser = require('body-parser')

restaurant.use(bodyParser.json())
restaurant.use(bodyParser.urlencoded({extended:false}))

restaurant.get('/', (req, res) => {
    // res.send('ini restaurants')
    model.Restaurant.findAll()
    .then(restaurants => {
        res.render('restaurant.ejs', {restaurant: restaurants})
    })
})

restaurant.get('/:id/view_menu', (req, res)=> {
    model.Restaurant.findAll({
        include:[{model: model.Menu}],
        where: {id: req.params.id}
    })
    .then(list => {
        // res.send(list)
        res.render('restaurant-menus.ejs', {data:list})
    })
})

// restaurant.post('/:id/view_menu', (req, res) => {
//     console.log(req.body)
//     res.render(`/restaurant/${req.params.id}/search`, )
// })


// restaurant.get('/:id/search', (req, res) => {
//     res.render(``)
// })
module.exports = restaurant