'use strict'
const db = require('../models/index.js')
const express = require('express')

class MenuController {

  static homepage(req, res){
    db.Menu.findAll({
      include: [
        {model: db.Restaurant}
      ]
    }).then(foundMenus => {
      // res.send(foundMenus)
      db.Restaurant.findAll({
      }).then(foundRestaurants => {
        res.render('./menu/menu.ejs', {
          title: 'menu',
          header: 'menus',
          foundMenus:foundMenus,
          foundRestaurants:foundRestaurants,
          err: null
        })
      })

    })
  }




  static menuAddPagePost(req,res){
    console.log(req.body);
    db.Menu.create({
      name: req.body.name,
      menu_type: req.body.menu_type,
      rating: parseInt(req.body.rating),
      price: parseInt(req.body.price),
      RestaurantId: req.body.RestaurantId,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newMenu => {
      res.redirect('/menus')
    }).catch(err=>{
      db.Menu.findAll({

      }).then(foundMenus => {
        // res.send(foundMenu)
        db.Restaurant.findAll({
        }).then(foundRestaurants => {
          res.render('./menu/menu.ejs', {
            title: 'menu',
            header: 'menus',
            foundMenus:foundMenus,
            foundRestaurants:foundRestaurants,
            err: err
          })
        })
      })
    })
  }

  static menuEditPage(req,res){
    let menuID = req.params.id
    db.Menu.findById(menuID).then(foundMenu => {
      // res.send('supplier edit')
      db.Restaurant.findAll({
      }).then(foundRestaurants => {
        res.render('./menu/menuEditForm.ejs', {
          title:'Editing Menu Data',
          header:'Editing Menu',
          menuID: menuID,
          foundMenu: foundMenu,
          foundRestaurants:foundRestaurants,
          err: null
        })
      })

    })
  }
  static menuEditPagePost(req,res){
    let menuID = req.params.id
    db.Menu.update(
      {
        name: req.body.name,
        menu_type: req.body.menu_type,
        rating: parseInt(req.body.rating),
        price: parseInt(req.body.price),
        RestaurantId: req.body.RestaurantId,
        updatedAt: new Date()
      },
      {
        where:{
          id:req.params.id
        }
      }
    ).then(updatedMenu=>{
      // res.send('supplier edit')
      res.redirect('/menus')
    }).catch(err=>{
      db.Restaurant.findAll({
      }).then(foundRestaurants => {
        res.render('./menu/menuEditForm.ejs', {
          title:'Editing Menu Data',
          header:'Editing Menu',
          menuID : menuID,
          foundMenu: {
            name: req.body.name,
            menu_type: req.body.menu_type,
            rating: parseInt(req.body.rating),
            price: parseInt(req.body.price),
            RestaurantId: req.body.RestaurantId,
          },
          foundRestaurants:foundRestaurants,
          err: err
        })
      })

    })
  }

  static menuDeletePage(req,res){

  }

}

module.exports = MenuController;
