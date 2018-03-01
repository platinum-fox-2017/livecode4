const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', function(req, res){
    models.Menu.findAll({
        include: {model: models.Restaurant}
    }).then(data =>{
        models.Restaurant.findAll().then(dataResto =>{
            res.render('../views/menu/menu.ejs', { data:data, dataRes:dataResto } )
            // res.send(data)
        })
    })
    
})

router.post('/', function(req, res){
    models.Menu.create({ 
        name: req.body.nama,
        menu_type: req.body.type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.selectresto,
        createdAt: new Date(),
        updatedAt: new Date(),
    }).then(() =>{
        res.redirect('/menus')
    })
})

router.get('/:id/edit', function(req, res){
    models.Menu.findAll({
        include: {model: models.Restaurant}
    }).then(data => {
        models.Restaurant.findAll().then(dataResto =>{
            models.Menu.findById(req.params.id).then(dataEdit =>{
                res.render('../views/menu/edit-menu.ejs', { data:data, dataRes:dataResto, dataEdit:dataEdit})
                // res.send(data);
            })
        })
    })
})

router.post('/:id/edit', function(req, res){
    models.Menu.update({
        name: req.body.nama,
        menu_type: req.body.type,
        rating: req.body.rating,
        price: req.body.price,
        RestaurantId: req.body.selectresto,
    }, {
        where: { id: req.params.id }
    }).then(() =>{
        res.redirect('/menus')
    })
})

router.get('/:id/delete', function(req, res){
    // res.send('Halaman delete = ' + req.params.id)
    models.Menu.destroy({
        where: { id: req.params.id }
    }).then(() =>{
        res.redirect('/menus')
    })
    
})

module.exports = router;