const express = require('express')
const router = express.Router()
const format_currency = require('../helpers/format_currency')
const Model = require('../models')

router.get('/',(req, res)=> {
    Model.Menu.findAll({
        include:[Model.Restaurant]
    }).then(data=>{
        Model.Restaurant.findAll().then(datarestaurant=>{
            res.render('listMenu', {menu:data, restaurant: datarestaurant, formatCurrency: format_currency, error:null})
        }).catch(err=>{
        res.send(err)
        })
    }).catch(err=>{
        res.send(err)
    })
})
router.post('/add',(req, res)=> {
    Model.Menu.create({
        name : req.body.name,
        menu_type: req.body.menu_type,
        rating:req.body.rating,
        price:req.body.price || 0,
        id_restaurant: req.body.id_restaurant
    }).then(()=>{
        res.redirect('/menus')
    }).catch(err=>{
        // Model.Menu.findAll({
        //     include:[Model.Restaurant]
        // }).then(data=>{
        //     Model.Restaurant.findAll().then(datarestaurant=>{
        //         res.render('listMenu', {menu:data, restaurant: datarestaurant, formatCurrency: format_currency, error:err.message}) 
        //     }).catch(err=>{
        //         res.send(err)
        //     })
        // }).catch(err=>{
            res.send(err)
        // })               
    })
})

router.get('/edit/:id',(req, res)=> {
    Model.Menu.findById(req.params.id).then(data=>{
        Model.Restaurant.findAll().then(datarestaurant=>{
            // res.send(datarestaurant)
            res.render('editMenu',{menu:data, restaurant:datarestaurant})
        }).catch(err=>{
            res.send(err)
        }).catch(err=>{
            res.send(err)
        })
    })
})
router.post('/edit/:id',(req, res)=> {
    Model.Menu.update({
        name : req.body.name,
        menu_type: req.body.menu_type,
        rating:req.body.rating,
        price:req.body.price || 0,
        id_restaurant: req.body.id_restaurant
    },{
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.redirect('/menus')
    }).catch(err=>{
        res.send(err)
    })
})
router.get('/delete/:id',(req, res)=> {
    Model.Menu.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.redirect('/menus')
    }).catch(err=>{
        res.send(err)
    })
})


module.exports = router