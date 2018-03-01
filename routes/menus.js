const routes = require('express').Router()
const Models = require('../models')

routes.get('/', (req, res) => {
  console.log(req.query)
  // res.status(200).json({message: 'Connected!'})
  let err = {
    msg: req.query.err
  }
  Models.Menu.findAll({
    include: [{
      model: Models.Restaurant
    }]
  }).then((menus) => {
    Models.Restaurant.findAll()
      .then((restaurants) => {
        // res.send(menus)
        res.render('menus.ejs', {restaurants: restaurants, menus: menus, err: err})
      }).catch(err => {
        console.log(err)
      })
  }).catch(err => {
    console.log(err)
  })
})

routes.post('/', (req, res) => {
  // res.send(req.body)
  let addMenu = {
    name: req.body.name,
    menu_type: req.body.menu_type,
    rating: req.body.rating,
    price: req.body.price,
    RestaurantId: req.body.RestaurantId
  }
  Models.Menu.create(addMenu).then(() => {
    res.redirect('/menus')
  }).catch(err => {
    res.redirect(`/menus?err=${err.message}`)
    console.log(err)
  })
})

routes.get('/:id/edit', (req, res) => {
  console.log(req.query)
  let err = {
    msg: req.query.err
  }
  Models.Menu.findById(req.params.id)
    .then(menu => {
      Models.Restaurant.findAll()
        .then((restaurants) => {
          // res.send(restaurants)
          // res.send(menu)
          res.render('menu-edit.ejs', {restaurants: restaurants, menu: menu, err: err})
        }).catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

routes.post('/:id/edit', (req, res) => {
  // res.send(req.body)
  let editMenu = {
    name: req.body.name,
    menu_type: req.body.menu_type,
    rating: req.body.rating,
    price: req.body.price,
    RestaurantId: req.body.RestaurantId
  }
  Models.Menu.update(editMenu, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/menus')
  }).catch(err => {
    res.redirect(`/menus/${req.params.id}/edit?err=${err.message}&name=${editMenu.name}&menu_type=${editMenu.menu_type}&rating=${editMenu.rating}&price=${editMenu.price}&RestaurantId=${editMenu.RestaurantId}`)
    // console.log(err)
  })
})

routes.get('/:id/delete', (req, res) => {
  Models.Menu.findById(req.params.id)
    .then(menu => {
      menu.destroy()
        .then(() => {
          res.redirect('/menus')
        }).catch(err => {
          console.log(err)
        })
    }).catch(err => {
      console.log(err)
    })
})

module.exports = routes;