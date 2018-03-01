const express           = require('express')
const router            = express.Router()
const Model             = require('../models')
const Menu              = Model.Menu
const Restaurant        = Model.Restaurant
const format            = require('../helpers/helper')

router.get('/', (req, res) => {
  Restaurant.findAll()
  .then(restaurants => {
    res.render('restaurant', { restaurants })
  })
})

router.get('/:id/view_menu', (req, res) => {
  let inputId = req.params.id
  Restaurant.findById(inputId,{
    include: [ Menu ]
  })
  .then(restaurant => {
    let objKey = []
    restaurant.Menus.forEach(menu => {
      let parsedMenu = JSON.parse(JSON.stringify(menu))
      objKey=(Object.keys(parsedMenu))
    })
    let key = objKey.slice(1,objKey.length-3)
    // res.send({restaurant, key: key})
    res.render('restaurant-menu',{ restaurant, key: key})
  })
})

router.post('/:id/view_menu', (req, res) => {
  let inputId = req.params.id
  let obj = req.body
  // console.log(obj);
  Restaurant.findOne({
    include: [ Menu ],
    where: {
      prop[0]:prop[1]
    }
  })
  .then(joinedData => {
    res.send(joinedData)
  })
})

module.exports = router;
