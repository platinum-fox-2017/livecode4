const routerrestaurant = require('express').Router();
const model = require('../models')


routerrestaurant.get('/',(req,res) => {
    model.restaurant.findAll().then(datas =>{
      res.render('restaurant',{data:datas})
    })
})

routerrestaurant.get('/viewmenu/:id',(req,res) => {
    model.restaurant.findAll({include:[{model:model.menu}]}).then(datas =>{
      res.send(datas)
    })
})

module.exports = routerrestaurant
