const express = require('express')
const routes = express.Router()
const models = require('../models')
const sequelize = require('sequelize')

routes.get('/',function(req,res){
  models.Menu.findAll({include:[{model:models.Restaurant}]})
    .then((dataMenu)=>{
      let obj = {
        data: dataMenu
      }
      let errMsg;
      if(req.query==null){
        errMsg = null
      } else {
        errMsg = req.query.err
      }
      res.render('menus/list.ejs',{obj:obj,err:errMsg})
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
  }).catch((err)=>{
    res.redirect(`/menus?err=${err.message}`)
  })
})

routes.get('/:id/edit',function(req,res){
  models.Menu.findById(req.params.id)
    .then((dataMenu)=>{
      let obj = {
        data: dataMenu
      }
      let errMsg;
      if(req.query==null){
        errMsg = null
      } else {
        errMsg = req.query.err
      }
      res.render('menus/edit.ejs',{obj:obj,err:errMsg})
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
    }).catch((err)=>{
      res.redirect(`/menus/${req.params.id}/edit?err=${err.message}`)
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
