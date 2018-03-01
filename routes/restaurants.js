const router = require('express').Router();
const models = require('../models');
const Op = require('sequelize').Op;

router.get('/', (req, res) => {
  models.Restaurant.all().then((restaurants) => {
    res.render('restaurants/index',{restaurants: restaurants});

  })
});

router.get('/:id/view_menu', (req, res) => {
  let id = req.params.id;
  models.Restaurant.findOne({
    where: {
      id: id
    },
    include: [{
      model: models.Menu,
      order: [['id','asc']]
    }]
  }).then((restaurant) => {
    res.render('restaurants/view_menu',{restaurant: restaurant});
  });
});

router.post('/:id/view_menu', (req, res) => {
  let id = req.params.id;
  let where = {};
  where[req.body.search_type] = {
    [Op.iLike]: `%${req.body.keyword}%`
  }
  models.Restaurant.findOne({
    where : {
      id: id
    },
    include: [{
      model: models.Menu,
      where,
      order: [['id','asc']]
    }]
  }).then((restaurant) => {
    // res.send(restaurant);
    if (restaurant == null) {
      models.Restaurant.findOne({
        where: {
          id: id
        }
      }).then((restaurant) => {
        restaurant.Menus = [];
        res.render('restaurants/view_menu',{restaurant: restaurant});
      })
    } else {
      res.render('restaurants/view_menu',{restaurant: restaurant});
    }
  });
});
module.exports = router;
