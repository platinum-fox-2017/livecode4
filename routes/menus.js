const routes = require('express').Router()
const models = require('../models')


routes.get('/', function(req, res){
    models.Menu.findAll({
        order: [['id','ASC']],
        include: [{
            model: models.Restaurant
        }]
    }).then(menus => {
        // res.send(menus[0].Restaurant)

        res.render('listMenu',({menus: menus}))
    }).catch(err => {
        res.send(err)
    })
})

routes.post('/', function(req, res){
    models.Menu.create({
        name: req.body.menu_name,
        menu_type: req.body.menu_type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.restoId 
      })
          .then(menus => {
            res.redirect('/menus')
          }).catch(err=>{
            res.send(err)
          });
})


routes.get('/:id/edit', function(req, res){
    models.Menu.findById(req.params.id)
    .then(menus => {
        // res.render('editMenu', {menus: menus})
        // res.send(menus)
        menus.getRestaurant()
    })
    // .then(menuResto => {
    //     // res.send(menuResto.name)
    // })
})

routes.post('/:id/edit', function(req, res){
    res.send('halaman post edit menu')
})


routes.get('/:id/delete', function(req, res){
    models.Menu.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.redirect('/menus')
    }).catch(err => {
        res.send(err)
    })
})



module.exports = routes