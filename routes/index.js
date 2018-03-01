'use strict';
module.exports = (function() {
  const routes = require('express').Router();
  const restaurants = require('./restaurants')
  const menus = require('./menus')

  routes.use('/restaurants', restaurants)
  routes.use('/menus', menus)

  routes.get('/', function (req, res) {
    res.render('index',{});
  });
  return routes;
})();
