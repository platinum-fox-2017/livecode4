const express = require('express');
const app = express();
const router = express.Router()
const models = require('../models')
const Menu = models.Menu
const Restaurant = models.Restaurant
const currency = require('../helpers/currency')

router.get('/',function(req,res){
  Menu.findAll({
    include:[Restaurant]
  }).then(data=>{
    Restaurant.findAll().then(listRestaurant=>{
      // res.send(data)
      res.render('menu/list_menu',{dataMenu:data,dataResto:listRestaurant,format:currency})
    })
  }).catch(err=>{
    res.send(err)
  })
})

router.post('/',function(req,res){
  console.log(req.body)
  Menu.create(req.body).then(data=>{
    res.redirect('/menus')
  }).catch(err=>{
    res.send(err)
  })
})

router.get('/:id/edit',function(req,res){
  let id = req.params.id
  Menu.findById(id).then(data=>{
    // res.send(data)
    Restaurant.findAll().then(detail=>{
      res.render('menu/edit_menu',{menu:data,dataResto:detail})
    })
    
  }).catch(err=>{
    res.send(err)
  })
})

router.post('/:id/edit',function(req,res){
  let id = req.params.id
  console.log(id)
  Menu.update(req.body,{
    where:{id:id}
  }).then(data=>{
    res.redirect('/menus')
  }).catch(err=>{
    res.send(err)
  })
})
router.get('/:id/delete',function(req,res){
  let id = req.params.id
  Menu.destroy({
  where:{id:id}})
  .then(()=>{
    res.redirect('/menus')
  })
})

module.exports = router

