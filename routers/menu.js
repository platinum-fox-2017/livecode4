const express           = require('express')
const router            = express.Router()
const Model             = require('../models')
const Menu              = Model.Menu
const Restaurant        = Model.Restaurant
const format            = require('../helpers/helper')


router.get('/', (req, res) => {
  Menu.findAll({
    include: [ Model.Restaurant ]
  })
  .then(menus => {
    Restaurant.findAll()
    .then(restaurants => {
      res.render('menu', { menus, restaurants, error: null, format })
      // res.send({ menus, restaurants, err: true, format })
    })
    .catch(err => {
      console.log(err);
    })
  })
  .catch(err => {
    console.log(err);
  })
})

router.post('/', (req, res) => {
  let objMenu = req.body
  console.log(objMenu);
  Menu.create(objMenu)
  .then(() => {
    res.redirect('/menus')
  })
  .catch(err => {
    Menu.findAll()
    .then(menus => {
      Restaurant.findAll()
      .then(restaurants => {
        res.render('menu', { menus, restaurants, error: err.errors[0].message, format })
        // res.send({ error: err.errors[0].message })
      })
      .catch(err => {
        console.log(err);
      })
    })
    .catch(err => {
      console.log(err);
    })
  })
})

router.get('/:id/edit', (req, res) => {
  let inputId = req.params.id
  Menu.findById(inputId)
  .then(menu => {
    Restaurant.findAll()
    .then(restaurants => {
      // res.send({ menu, restaurants })
      res.render('menu-edit-form',{ menu, restaurants })
    })
    .catch(err => {
      console.log(err);
    })
  })
  .catch(err => {
    console.log(err);
  })
})

router.post('/:id/edit', (req, res) => {
  let inputId = req.params.id
  let objMenu = req.body
  Menu.update(objMenu, {
    where: {
      id: inputId
    }
  })
  .then(() => {
    res.redirect('/menus')
  })
})

router.get('/:id/delete', (req, res) => {
  let inputId = req.params.id
  Menu.destroy({
    where: {
      id: inputId
    }
  })
  .then(() => {
    res.redirect('/menus')
  })
})

module.exports = router;
