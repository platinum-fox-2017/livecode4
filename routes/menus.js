const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let error
  models.Menu.findAll().then(menus => {
    models.Restaurant.findAll().then(restaurants => {
      res.render('menus', {menus, restaurants, error})
    })
  })
})

router.post('/', (req, res) => {
  models.Menu.create({
    name: req.body.name,
    menu_type: req.body.menu_type,
    rating: req.body.rating,
    price: req.body.price,
    restaurantId: req.body.restaurantId
  }).then(menus => {
    res.redirect('/menus')
  }).catch(error => {
    models.Menu.findAll().then(menus => {
      models.Restaurant.findAll().then(restaurants => {
        res.render('menus', {menus, restaurants, error})
      })
    })
  })
})

router.get('/:id/edit', (req, res) => {
  let error
  models.Menu.findById(req.params.id).then(menus => {
    models.Restaurant.findAll().then(restaurants => {
      res.render('edit_menu', {menus, restaurants, error})
    })
  })
})

router.post('/:id/edit', (req, res) => {
  models.Menu.update({
    name: req.body.name,
    menu_type: req.body.menu_type,
    rating: req.body.rating,
    price: req.body.price,
    restaurantId: req.body.restaurantId
  },{
    where: {id: req.params.id}
  }).then(menus => {
    res.redirect('/menus')
  }).catch(error => {
    models.Menu.findById(req.params.id).then(menus => {
      models.Restaurant.findAll().then(restaurants => {
        res.render('edit_menu', {menus, restaurants, error})
      })
    })
  })
})

router.get('/:id/delete', (req, res) => {
  models.Menu.destroy({
    where: {id: req.params.id}
  }).then(menus => {
    res.redirect('/menus')
  })
})

module.exports = router;
