const models = require('../models');
const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', (req, res) => {
  models.Restaurant.findAll().then(restaurants => {
    res.render('restaurants', {restaurants})
  })
})

router.get('/:id/view_menu', (req, res) => {
  models.Restaurant.findById(req.params.id, {
    include: [models.Menu]
  }).then(datas => {
    res.render('view_menu', {datas})
  })
})

router.post('/:id/view_menu', (req, res) => {
  models.Menu.findAll({
    [Op.iLike]: `%${req.body.keyword}%`
  },{
    where: {id: req.body.restaurantId}
  }).then(menus => {
    res.redirect('/restaurants/:id/search')
  })
})

router.get('/:id/search', (req, res) => {
  let keyword = req.body.keyword
  models.Restaurant.findById(req.params.id, {
    include: [models.Menu]
  },{
    [Op.iLike]: `%${req.body.keyword}%`
  }).then(restaurants => {
    res.render('search', {restaurants, keyword})
  })
})

router.post('/:id/search', (req, res) => {
  models.Menu.findAll({
    [Op.iLike]: `%${req.body.keyword}%`
  },{
    where: {id: req.body.restaurantId}
  }).then(menus => {
    res.redirect('/restaurants/'+req.params.id+'/search')
  })
})

module.exports = router;
