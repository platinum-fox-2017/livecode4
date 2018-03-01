const routes = require('express').Router()
const Models = require('../models')

routes.get('/', (req, res) => {
  // res.status(200).json({message: 'Connected!'})
  Models.Restaurant.findAll({
    order: [
      ['id', 'ASC']
    ]
  })
    .then((restaurants) => {
      // res.send(restaurants)
      res.render('restaurant.ejs', {restaurants: restaurants})
    }).catch(err => {
      console.log(err)
    })
})

routes.get('/:id/view_menu', (req, res) => {
  // res.status(200).json({message: 'Connected!'})
  Models.Restaurant.findById(req.params.id)
    .then(restaurant => {
      restaurant.getMenus({
        order: [
          ['id', 'ASC']
        ]
      })
        .then((menus) => {
          // res.send(menus)
          res.render('view_menu.ejs', {menus: menus})
        }).catch(err => {
          console.log(err)
        })
    }).catch(err => {
      console.log(err)
    })
})

module.exports = routes;