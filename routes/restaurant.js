const express = require('express')
const router = express.Router()

const Models = require('../models')
const currencyHelpers = require('../helpers/currencyHelpers')

router.get('/', (req, res, next) => {
    Models.Restaurant.findAll({
        include: [{ model: Models.Menu }]
    }).then(data => {
        Models.Menu.findAll().then(dataMenu => {
            res.render('./restaurant-view/restaurant', { data, dataMenu, currencyHelpers: currencyHelpers });
        })
    })

router.get('/:id/view_menu', (req, res) => {
    Models.Restaurant.findById(req.params.id).then(data => {
        Models.Menu.findAll({
            include: [{model: Models.Menu, attributes: ['id', 'name', 'menu_types', 'rating', 'price', 'restaurantId']}]
        }).then(dataMenu => {
            res.render('./restaurant-view/view-menu', {data, dataMenu, currencyHelpers: currencyHelpers})
        })
    })
})

})

module.exports = router