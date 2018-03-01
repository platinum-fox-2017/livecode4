const router = require('express').Router();
const { Restaurant, Menu } = require('../models')

router.get('/', (req, res) => {
    Restaurant.findAll().then((dataRestaurants) => {
        res.render('restaurant', { dataRestaurants })
    })
})

router.post('/:id/view_menu', (req, res) => {
    Menu.findAll({
        where: {
            restaurantId: req.params.id
        },
        include: [Restaurant]
    }).then((datasMenu) => {
        Restaurant.findById(req.params.id).then((dataRestaurant) => {
            res.render('detail-restaurant', { datasMenu, dataRestaurant })
        })
    })
})

router.get(':id/search', (req, res) => {
    const searchby = req.body.searchby
    const keyword = req.body.keyword
    Restaurant.findById(req.params.id).then((dataRestaurant) => {
        Menu.findAll({
            where: {
                seachby: keyword,
                restaurantId: req.params.id
            }
        }).then((datasMenu) => {
            res.render('detail-restaurant', { datasMenu, dataRestaurant })
        })
    })
})

module.exports = router