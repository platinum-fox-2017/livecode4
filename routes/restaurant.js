const express = require ('express')
const router = express.Router()
const {Restaurant,Menu} = require('../models')

router.get('/',(req,res)=>{
  Restaurant.findAll({
    include:[Menu]
  })
  .then(dataRestaurant=>{
    // res.send(dataRestaurant)
    res.render('restaurant',{dataRestaurant:dataRestaurant})
  })
})

router.get('/:id/view_menu',(req,res)=>{
  Restaurant.findOne({
    where:{
      id:req.params.id
    },
    include:[Menu]
  }).then(dataMenu=>{
    // res.send(dataMenu)
    res.render('viewMenu',{dataMenu:dataMenu})
  })
})
module.exports = router;
