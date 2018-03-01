'use strict';
const models = require('../models');
module.exports = (function() {
  // app.set('view engine', 'ejs')
const routes = require('express').Router();

routes.get('/', function (req, res) {
  models.Menu.findAll({
    order: [['id','ASC']],
    include: [{
     model: models.Restaurant
   }]
  })
  .then(data => {
    res.render('viewMenu.ejs',{data:data});
    // res.send(data)
  });
});

routes.get('/add',function(req,res){
  models.Restaurant.findAll({
    order: [['id','ASC']],
  })
  .then(data => {
    res.render('formAddMenu',{data_error:req.query,data:data})
    // res.send(data)
  });

})

routes.post('/add',function(req,res){
  let obj={
    name:req.body.name,
    menu_type:req.body.menu_type,
    rating:req.body.rating,
    price:req.body.price,
    RestaurantId:req.body.RestaurantId,
  }
  models.Menu.create(obj).then(data=>{
    res.redirect('/menus')
  }).catch(err=>{
    res.redirect(`/menus/add?error=${err.message}`)
  })

})

routes.get('/update/:id',function(req,res){
  models.Menu.findById(req.params.id).then(data=>{
    res.render('formUpdateMenu',{data:data})
  })
})

routes.post('/update/:id',function(req,res){
  let obj = {
    name:req.body.name,
    menu_type:req.body.menu_type,
    rating:req.body.rating,
    price:req.body.price,

  }

  models.Menu.update(obj,{
    where:{
      id : req.params.id
    }
  }).then(data=>{
    res.redirect('/menus')
    // res.send(data)
  }).catch(err=>{
    res.send(err)
  })
})

routes.get('/delete/:id', function (req, res) {
  models.Menu.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.redirect('/menus')
    }).catch(err=>{
      res.send(err)
    });
  })



return routes;
})();
