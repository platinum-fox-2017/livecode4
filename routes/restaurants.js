const express = require('express')
const routes = express.Router()
const models = require('../models')
const sequelize = require('sequelize')

routes.get('/',function(req,res){
  models.Restaurant.findAll({})
    .then((dataRest)=>{
      let obj = {
        data: dataRest
      }
      res.render('restaurants/list.ejs',obj)
    })
})

routes.get('/:id/menu',function(req,res){
  models.Restaurant.findAll({include:[{model:models.Menu}]})
    .then((dataRest)=>{
      let obj = {
        data: dataRest
      }
      res.render('restaurants/menu.ejs',obj)
    })
})

routes.post('/:id/menu',function(req,res){
  models.Restaurant.findAll({
    include:[{model:models.Menu}],
    where:{
    }
  }).then((dataRest)=>{
      let obj = {
        data: dataRest
      }
      res.render('restaurants/menu.ejs',obj)
    })
})

module.exports = routes;
