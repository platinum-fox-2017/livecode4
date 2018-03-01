const router = require('express').Router();
const { Restaurant, Menu } = require('../models')
const currencyFormat = require('../helpers/currency')

router.get('/', (req, res) => {
    const err = ''
    Menu.findAll({
        include: [Restaurant]
    }).then((datasMenu) => {
        Restaurant.findAll().then((datas) => {
            res.render('menus', { datasMenu, datas, err })
        })
    })
})

router.post('/', (req, res) => {
    const menu = {
        name: req.body.menu,
        menu_type: req.body.menutype,
        rating: req.body.rating,
        price: req.body.price,
        restaurantId: req.body.restaurantId
    }
    Menu.create(menu).then(() => {
        res.redirect('/menus')
    }).catch((err) => {
        Menu.findAll({
            include: [Restaurant]
        }).then((datasMenu) => {
            Restaurant.findAll().then((datas) => {
                res.render('menus', { datasMenu, datas, err: err.errors[0].message })
            })
        })
    })
})

router.get('/:id/edit', (req, res) => {
    const err = ''
    Menu.findById(req.params.id, {
        include: [Restaurant]
    }).then((data) => {
        Restaurant.findAll().then((dataRestaurant) => {
            // res.send(data)
            res.render('menu-edit', { data, dataRestaurant, err })
        })
    })
})

router.post('/:id/edit', (req, res) => {
    const input = {
        name: req.body.menu,
        menu_type: req.body.menutype,
        rating: req.body.rating,
        price: req.body.price,
        restaurantId: req.body.restaurantId
    }
    Menu.findById(req.params.id).then((data) => {
        Restaurant.findAll().then((dataRestaurant) => {
            Menu.update(input, {
                where: {
                    id: req.params.id
                }
            })
                .then(() => {
                    res.redirect('/menus')
                })
                .catch((err) => {
                    res.render('menu-edit', { dataRestaurant, data, err: err.errors[0].message })
                })
        })






    })
})

router.get('/:id/delete', (req, res) => {
    const id = req.params.id
    Menu.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/menus')
    })
})

module.exports = router