const express = require('express')
const routes = express.Router()

routes.get('/',function(req,res){
  res.render('home/home.ejs')
})

routes.use('/menus',require('./menus.js'))

module.exports = routes;
