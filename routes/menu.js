const router = require('express').Router()
const { Menu, Restaurant } = require('../models');

router.get('/', (req,res) => {
    Menu.findAll({
        include: Restaurant
    })
    .then(data => {
        Restaurant.findAll()
        .then(dataRes => {
            // console.log(data)
            let err = null
            res.render('menu', { data, dataRes, err, helper: require('../helper/format_currency') })
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
});

router.post('/', (req,res) => {
    let dataAddObj = {
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        id_restaurant: req.body.id_restaurant
    }
    Menu.create(dataAddObj)
    .then(success => {
        res.redirect('/menus')
    })
    .catch(err => {
        Menu.findAll({
            include: Restaurant
        })
        .then(data => {
            Restaurant.findAll()
            .then(dataRes => {
                res.render('menu', { data, dataRes, err, helper: require('../helper/format_currency') })
                console.log(err)
            })
        })
    })
});

router.get('/:id/edit', (req,res) => {
    Menu.findById(req.params.id)
    .then(data => {
       Restaurant.findAll()
        .then(dataRes => {
            console.log(data)
            res.render('edit_menu', { data, dataRes })
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
});

router.post('/:id/edit', (req, res) => {
    let dataEditObj = {
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        id_restaurant: req.body.id_restaurant
    }
    Menu.update(dataEditObj, {
        where : {
            id: req.params.id
        }
    })
    .then(data => {
        res.redirect('/menus')
    })
    .catch(err => {
        console.log(err)
    })
});

router.get('/:id/delete', (req,res) => {
    Menu.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.redirect('/menus')
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router