const express = require('express')
const routes = express.Router()
const models = require('../models')
const sequelize = require('sequelize')

routes.get('/',function(req,res){
  models.Menu.findAll({})
    .then((dataMenu)=>{
      models.Restaurant.findAll({})
        .then((dataRest)=>{
          let men = {
            dataMenu: dataMenu
          }
          let res = {
            dataMenu: dataRest
          }
          res.render('menus/list.ejs',{men:men,res:res})
        })
    })
})

routes.post('/',function(req,res){
  models.Menu.create({
    name: req.body.newName,
    menu_type: req.body.newMenuType,
    rating: req.body.newRating,
    price: req.body.newPrice,
    RestaurantId: req.body.newResId,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then(()=>{
    res.redirect('/menus')
  })
})

routes.get('/:id/edit',function(req,res){
  models.Menu.findById(req.params.id)
    .then((dataMenu)=>{
      let obj = {
        data: dataMenu
      }
      res.render('menus/edit.ejs',obj)
    })
})

routes.post('/:id/edit',function(req,res){
  models.Menu.update({
    name: req.body.newName,
    menu_type: req.body.newMenuType,
    rating: req.body.newRating,
    price: req.body.newPrice,
    RestaurantId: req.body.newResId,
    updatedAt: Date.now()
  },{where:{id:req.params.id}})
    .then(()=>{
      res.redirect('/menus')
    })
})

routes.get('/:id/delete',function(req,res){
  models.Menu.destroy({
    where:{id:req.params.id}
  }).then(()=>{
    res.redirect('/menus')
  })
})


module.exports = routes;
