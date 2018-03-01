const express = require ('express')
const router = express.Router()
const {Menu,Restaurant} = require('../models')

router.get('/',(req,res)=>{
  Menu.findAll({
    include:[Restaurant]
  })
  .then(dataMenus=>{
    // res.send(dataMenus)
    res.render('menus',{dataMenus:dataMenus})
  })
})

router.get('/add',(req,res)=>{
  Restaurant.findAll()
  .then(dataRestaurant=>{
    res.render('addMenu',{dataRestaurant:dataRestaurant,err:null})
  })
})

router.post('/add',(req,res)=>{
  Menu.create({
    name:req.body.name,
    menu_type:req.body.menu_type,
    rating:req.body.rating,
    price:req.body.price,
    restaurantId:req.body.restaurantId
  })
  .then(()=>{
    res.redirect('/menus')
  }).catch(err=>{
    res.render('addMenu',{err:err})
  })
})

router.get('/update/:id',(req,res)=>{
  Menu.findOne({
    where:{
      id:req.params.id
    }
  }).then(dataMenus=>{
    Restaurant.findAll()
    .then(dataRestaurant=>{
      // res.send(dataRestaurant)
      res.render('updateMenu',{dataMenus:dataMenus,dataRestaurant:dataRestaurant,err:null})
    })
  })
})

router.post('/update/:id',(req,res)=>{
  let obj = {
    name:req.body.name,
    menu_type:req.body.menu_type,
    rating:req.body.rating,
    price:req.body.price,
    restaurantId:req.body.restaurantId
  }
  Menu.update(obj,{
    where:{
      id:req.params.id
    }
  })
  .then(()=>{
    res.redirect('/menus')
  })
  .catch(err=>{
    res.redirect(`/menus/update/${req.params.id}`)
  })
})

router.get('/delete/:id',(req,res)=>{
  Menu.destroy({
    where:{
      id:req.params.id
    }
  }).then(()=>{
    res.redirect('/menus')
  })
})

module.exports = router;
