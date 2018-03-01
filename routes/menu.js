const express = require('express');
const router = express.Router()
const models = require('../models')

router.get('/', function (req, res) {
  models.Menu.findAll({
    order: ['id'],
    include:[{
      model: models.Restaurant
    }]
  }).then(data => {
    models.Restaurant.findAll().then(data1 => {
      let test = JSON.parse(JSON.stringify(data))
      console.log(test);
      res.render('menu', {data_menu: data, data_rest: data1})
    })
  })
})

router.post('/add', function (req, res) {
  let obj = {
    name: req.body.name,
    menu_type: req.body.menu_type,
    rating: req.body.rating,
    price: req.body.price,
    id_restaurant: req.body.id_restaurant
  }
  // console.log(obj);
  models.Menu.create(obj).then(data => {
    res.redirect('/menus')
  })
})

router.get('/edit/:id', function (req, res) {
  // console.log(typeof req.params.id);
  let numMenu = +req.params.id
  models.Menu.findById(numMenu).then(data => {
    models.Restaurant.findAll().then(data1 => {
      let test = JSON.parse(JSON.stringify(data))

      console.log(test);
      res.render('edit-menu', {data_menu: data, data_rest: data1})
    })
  })
})

router.post('/edit/:id', function (req, res) {
  let obj = {
    name: req.body.name,
    menu_type: req.body.menu_type,
    rating: req.body.rating,
    price: req.body.price,
    id_restaurant: req.body.id_restaurant
  }
  models.Menu.update(obj, {
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.redirect('/menus')
  })
})

router.get('/delete/:id', function (req, res) {
  models.Menu.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.redirect('/menus')
  })
})





module.exports = router
