const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res) => {
  models.Menu.all({
    include: [{ model: models.Restaurant}]
  }).then((menus) => {
    models.Restaurant.all().then((restaurants) => {
      res.render('menus/index',{menus: menus, restaurants: restaurants});
    });
  });
});

router.post('/', (req, res) => {
  models.Menu.build(req.body).save().then(() => {
    res.redirect('/menus');
  }).catch((err) => {
  });
});

router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  models.Menu.findById(id).then((menu) => {
    models.Restaurant.all().then((restaurants) => {
      res.render('menus/edit',{menu: menu, restaurants: restaurants});
    });
  });
});

router.post('/:id/edit', (req, res) => {

});

router.get('/:id/delete', (req, res) => {

});
module.exports = router;
