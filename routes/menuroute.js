const menuroute = require('express').Router();
const model = require('../models')


menuroute.get('/',(req,res) => {
  model.menu.findAll({include:[{model:model.restaurant}]}).then(datas =>{
    model.restaurant.findAll().then(datarestaurant =>{
      res.render('menu',{data:datas,restaurant:datarestaurant,error:req.query})
    })
  })
})

menuroute.post('/add',(req,res) => {
  model.menu.create({nama:req.body.nama,menu_type:req.body.menu_type,rating:req.body.rating,price:req.body.price,restaurant_Id:req.body.restaurant_id}).then(()=>{
    res.redirect('/menus')
  }).catch(err => {
    res.redirect(`/menus?err=${err.message}`)
  })
})


  menuroute.get('/update/:id',(req,res) => {
    model.menu.findById(req.params.id).then(datas =>{
      model.restaurant.findAll().then(datarestaurant =>{
        res.render('menuupdateform',{data:datas,restaurant:datarestaurant,error:req.query})
      })

    })
  })

  menuroute.post('/update/:id',(req,res) => {
    model.menu.update({
      nama:req.body.nama,
      menu_type:req.body.menu_type,
      rating:req.body.rating,
      price:req.body.price,
      restaurant_Id:req.body.restaurant_id},{where:{id:req.params.id}
    }).then(()=>{
      res.redirect('/menus')
    }).catch(err => {
      res.redirect(`/menus/update/${req.params.id} ?err=${err.message}`)
    })
  })

  menuroute.get('/delete/:id',(req,res) => {
    model.menu.destroy({where:{id:req.params.id}}).then(()=>{
      res.redirect('/menus')
    })
  })

module.exports = menuroute
