const express = require('express')
const router = express.Router()

const Models = require('../models')
const currencyHelpers = require('../helpers/currencyHelpers')


router.get('/', (req, res, next) => {
    Models.Menu.findAll({
        include: [{model: Models.Restaurant, attributes: ['name']}]
    }).then(data => {
        Models.Restaurant.findAll().then(dataRestaurant => {
            res.render('./menu-view/menu', { data, dataRestaurant, currencyHelpers: currencyHelpers, err: req.query.err });
        })
    })
})

router.post('/add', (req, res, next) => {
    Models.Menu.create(req.body).then(data => {
        res.redirect('/menus')
    }).catch(err => {
        if (!err.errors[0]) {
            err.errors[0].message = null
        }
        res.redirect(`/menus?err=${err.errors[0].message}`)
    })
})

router.get('/:id/edit', (req, res) => {
    Models.Menu.findById(req.params.id).then(data => {
        Models.Restaurant.findAll().then(dataRestaurant => {
            res.render('./menu-view/edit-menu', { data, dataRestaurant })
        })
    })
})

router.post('/:id/edit', (req, res) => {
    Models.Menu.update({
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        restaurantId: req.body.restaurantId,
        updatedAt: new Date()
    }, {where: {id:req.params.id}}).then(data => {
        res.redirect('/menus')
    })
})

router.get('/:id/delete', (req, res) => {
    Models.Menu.destroy({where: {id:req.params.id}}).then(data => {
        res.redirect('/menus')
    })
})

module.exports = router