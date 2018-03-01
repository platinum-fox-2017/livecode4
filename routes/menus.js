const express = require('express');
const model = require('../models')

const menus = express.Router();

menus.get('/', (req, res) => {
    let err = req.query.err;
    model.Menu.findAll({
        include: [{model: model.Restaurant}],
        order: [['id','ASC']]
    })
    .then(menus => {
        model.Restaurant.findAll()
        .then(restaurants => {
            res.render('menus', {menus:menus, restaurants:restaurants, err:err});
        })
    });
});

menus.post('/', (req, res) => {
    let record = {
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.RestaurantId
    };
    model.Menu.create(record)
    .then(() => {
        res.redirect('/menus')
    })
    .catch(err => {
        res.redirect(`/menus?err=${err}`)
    });
});

menus.get('/:id/delete', (req, res) => {
    let id = req.params.id;
    model.Menu.destroy({where: {id:id}})
    .then(() => {
        res.redirect('/menus')
    })
    .catch(err => console.log(err));
    
})

menus.get('/:id/edit', (req, res) => {
    let id = req.params.id;
    let err = req.query.err;
    model.Menu.findById(id)
    .then(menu => {
        model.Restaurant.findAll()
        .then(restaurants => {
            res.render('menusEdit', {menu:menu, restaurants:restaurants, err:err});
        })
    });
});
menus.post('/:id/edit', (req, res) => {
    let id = req.params.id;
    let updatedRecord = {
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.RestaurantId
    };
    model.Menu.update(updatedRecord, {where: {id:id}})
    .then(() => {
        res.redirect('/menus');
    })
    .catch(err => {
        res.redirect(`/menus/${id}/edit?err=${err}`)
    });
})

module.exports = menus;