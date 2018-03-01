'use strict'
const db = require('../models/index.js')
const express = require('express')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
    $eq: Op.eq,
    $or: Op.or,
}

class RestaurantController {

  static homepage(req, res){
    db.Restaurant.findAll({

    }).then(foundRestaurants => {
      // res.send(foundMenus)
      res.render('./restaurant/restaurant.ejs', {
        title: 'menu',
        header: 'menus',
        foundRestaurants:foundRestaurants,
        err: null
      })
    })
    // res.send('')
  }


  static viewMenu(req, res){
    // res.send(req.params.id)
    let restaurantId = req.params.id;
    db.Restaurant.findAll({
      where : {
        id: restaurantId
      },
      include : [
        {
          model: db.Menu
        }
      ]
    }).then(foundRestaurants => {
      // res.send(foundRestaurants[0].Menus)
      let restaurantMenus = foundRestaurants[0].Menus;
      res.render('./restaurant/restaurantViewMenu.ejs', {
        title: 'menu',
        header: 'menus',
        restaurantId: restaurantId,
        restaurantMenus: restaurantMenus,
        err: null
      })
    })
  }

  static search(req, res){
    let restaurantId = req.params.id;

    // res.send(req.body)
    let key = req.body.SearchKey
    let keyword = req.body.keyword



    db.Restaurant.findAll({
      where : {
        id: restaurantId,
        [key]:  { [Op.like]: `%${keyword}$`}
      },
      include : [
        {
          model: db.Menu
        }
      ]
    }).then(foundRestaurants => {
      let restaurantMenus = []
      if (foundRestaurants.length > 1) {
        restaurantMenus = foundRestaurants[0].Menus;
      }

      res.render('./restaurant/restaurantViewMenu.ejs', {
        title: 'menu',
        header: 'menus',
        restaurantId: restaurantId,
        restaurantMenus: restaurantMenus,
        err: null
      })
    })
  }

}

module.exports = RestaurantController;
