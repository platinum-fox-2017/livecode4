'use strict';
const models = require('../models');
module.exports = (function() {
  // app.set('view engine', 'ejs')
const routes = require('express').Router();

routes.get('/', function (req, res) {
  models.Restaurant.findAll({
    order: [['id','ASC']],
  })
  .then(data => {
    res.render('viewRestaurant.ejs',{data:data});
    // res.send(data)
  });
});

routes.get('/listMenu/:id',function(req,res){
  models.Restaurant.findAll({
  where: {
    id: req.params.id,
  },

}).then(data=>{
  data[0].getMenus()
  .then(data=>{
      res.render('viewListMenu',{data:data})
      // res.send(data)
   })
  })
})



return routes;
})();
