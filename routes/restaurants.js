const express = require('express');
const app = express();
const router = express.Router()
const models = require('../models')
const Menu = models.Menu
const Restaurant = models.Restaurant
const currency = require('../helpers/currency')
const Op = require('sequelize').Op

router.get('/',function(req,res){
  Restaurant.findAll().then(data=>{
    res.render('resto/list_resto',{resto:data})
  }).catch(err=>{
    res.send(err)
  })
})
router.get('/:id/view_menu',function(req,res){
  Restaurant.findOne({
    include:[Menu]
  }).then(data=>{
    // res.send(data)
    res.render('resto/view_menu',{menu:data,format:currency})
  }).catch(err=>{
    res.send(err)
  })
})
router.post('/:id/search',function(req,res){
  let keyword = req.body.keyword
  let category = req.body.category
  // let obj={};
  //   obj[category]

  // console.log(obj)
  console.log(category)
  Restaurant.findOne({
    include:[{model:Menu,where:{[category]:{[Op.iLike]:`%${keyword}%`}}}],
    where:{
      id:req.params.id
    }
  }).then(data=>{
    // res.send(data)
    res.render('resto/view_menu',{menu:data,format:currency})

  }).catch(err=>{
    res.send(err)
  })
})
module.exports = router  

