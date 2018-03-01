const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res) => {
  models.Menu.all({
    include: [{ model: models.Restaurant}]
  }).then((menus) => {
    models.Restaurant.all().then((restaurants) => {
      res.render('menus/index',{menus: menus, restaurants: restaurants,err: null});
    });
  });
});

router.post('/', (req, res) => {
  models.Menu.build(req.body).save().then(() => {
    res.redirect('/menus');
  }).catch((err) => {
    models.Menu.all({
      include: [{ model: models.Restaurant}]
    }).then((menus) => {
      models.Restaurant.all().then((restaurants) => {
        res.render('menus/index',{menus: menus, restaurants: restaurants,err: err.message});
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

});
module.exports = router;
