const routes = require('express').Router()
const models = require('../models')


routes.get('/', function(req, res){
    models.Menu.findAll({
        order: [['id','ASC']],
    }).then(menus => {
        // res.send(menus)
        res.render('listMenu',({menus: menus}))
    }).catch(err => {
        res.send(err)
    })
})

routes.post('/', function(req, res){
    res.send('halaman add menu')
})


routes.get('/:id/edit', function(req, res){
    res.send('halaman edit menu')
})

routes.post('/:id/edit', function(req, res){
    res.send('halaman post edit menu')
})


routes.get('/:id/delete', function(req, res){
    res.send('halaman delete menu')
})



module.exports = routes