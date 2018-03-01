const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res) => {
  let input = {
    name: null,
    menu_type: null,
    rating: null,
    price: null,
    RestaurantId: null
  }
  models.Menu.all({
    include: [{ model: models.Restaurant}],
    order: [['id','asc']]
  }).then((menus) => {
    models.Restaurant.all().then((restaurants) => {
      res.render('menus/index',{menus: menus, restaurants: restaurants,err: null,input: input});
    });
  });
});

router.post('/', (req, res) => {
  models.Menu.build(req.body).save().then(() => {
    res.redirect('/menus');
  }).catch((err) => {
    console.log(err);
    models.Menu.all({
      include: [{ model: models.Restaurant}],
      order: [['id','asc']]
    }).then((menus) => {
      models.Restaurant.all().then((restaurants) => {
        res.render('menus/index',{menus: menus, restaurants: restaurants,err: err.message,input: req.body});
      });
    });
  });
});

router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  models.Menu.findById(id).then((menu) => {
    models.Restaurant.all().then((restaurants) => {
      res.render('menus/edit',{menu: menu, restaurants: restaurants,err: null});
    });
  });
});

router.post('/:id/edit', (req, res) => {
  let id = req.params.id;

  models.Menu.findById(id).then((menu) => {
    return menu.update(req.body);
  }).then((menu) => {
    res.redirect('/menus');
  }).catch((err) => {
    models.Menu.findById(id).then((menu) => {
      models.Restaurant.all().then((restaurants) => {
        res.render('menus/edit',{menu: menu, restaurants: restaurants,err: err.message});
      });
    });
  });
});

router.get('/:id/delete', (req, res) => {
  let id = req.params.id;
  models.Menu.findById(id).then((menu) => {
    return menu.destroy();
  }).then(() => {
    res.redirect('/menus');
  }).catch(() => {
    res.redirect('/menus');

  });

});
module.exports = router;
