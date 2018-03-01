const express = require('express');
const router = express.Router()
const models = require('../models')

router.get('/', function (req, res) {
  models.Restaurant.findAll({
    include: {
      model: models.Menu
    }
  }).then(data => {
    let test = JSON.parse(JSON.stringify(data))
    console.log(test);
    res.render('restaurant', {data_rest: data})
  })
})

router.get('/:id/view_menu', function (req, res) {
  models.Restaurant.findById(req.params.id,{
    include: {
      model: models.Menu
    }
  }).then(data => {
    let test = JSON.parse(JSON.stringify(data))
    console.log(test);
    console.log(Object.keys(test.Menus[0]));
    res.render('menu-restaurant', {data_rest: data})
  })
})



module.exports = router
