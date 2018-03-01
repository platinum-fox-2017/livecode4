const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res) => {
    let err = req.query;
    models.Menu.findAll()
        .then(menus => {
            models.Restaurant.findAll()
                .then(restaurants => {
                    res.render('./menu/menu',{
                        menus:menus,
                        restaurants:restaurants,
                        err:err
                    });
                })
        })
});

router.post('/', (req, res) => {
    models.Menu.create({
        name: req.body.name,
        menu_type: req.body.type,
        rating: req.body.rating,
        price: req.body.price,
        createdAt: new Date(),
        updatedAt: new Date(),
        RestaurantId: req.body.RestaurantId
    }).then(() => {
        res.redirect('/menus');
    }).catch(err => {
        res.redirect(`/menus?err=${err}`);
    })
});

router.get('/:id/edit', (req, res) => {
    let err = req.query;
    models.Menu.findById(req.params.id)
        .then(menu => {
            models.Restaurant.findAll()
                .then(restaurants => {
                    res.render('./menu/menu-edit',{
                        menu:menu,
                        restaurants:restaurants,
                        err:err
                    });
                })
        })
});

router.post('/:id/edit', (req, res) => {
    models.Menu.update({
        name: req.body.name,
        menu_type: req.body.type,
        rating: req.body.rating,
        price: req.body.price,
        createdAt: new Date(),
        updatedAt: new Date(),
        RestaurantId: req.body.RestaurantId
    },{
        where: {
            id:req.params.id
        }
    }).then(() => {
        res.redirect('/menus');
    }).catch(err => {
        res.redirect(`/menus/${req.params.id}/edit?err=${err}`);
    });
});

router.get('/:id/delete', (req, res) => {
    models.Menu.destroy({
        where: {
            id:req.params.id
        }
    }).then(() => {
        res.redirect('/menus');
    })
});


module.exports = router;
