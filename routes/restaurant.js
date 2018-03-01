const express = require('express')
const router = express.Router()
const Model = require('../models')
const format_currency = require('../helpers/format_currency')

router.get('/',(req, res)=> {
    Model.Restaurant.findAll().then(data=>{
        res.render('listRestaurant',{restaurant:data})
    }).catch(err=>{
        res.send(err)
    })
})
router.get('/:id/viewmenu',(req, res)=> {
    Model.Menu.findAll({
        where:{
            id_restaurant : req.params.id
        },
        include:[Model.Restaurant]
    }).then(data=>{
        // res.send(data)
        res.render('listMenuRestaurat',{menu:data, formatCurrency: format_currency})
    }).catch(err=>{
        res.send(err)
    })
})


module.exports = router