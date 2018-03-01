const express = require('express')
const router = express.Router()
const op = require('sequelize').Op
const {Restaurant,Menu} = require('../models')

router.get('/',(req,res)=>{
    Restaurant.findAll().then(data=>{
        res.render('restaurant',{restaurant:data})
    })
})

router.get('/:id/view_menu',(req,res)=>{
    let id = req.params.id
    Restaurant.findById(id,{include:Menu}).then(data=>{
        // res.send(data)
        res.render('view_menu',{restaurant:data,helper:require('../helper/help')})
    })
})

router.post('/:id/view_menu',(req,res)=>{
    let id = req.params.id
    let search = req.body.search
    Restaurant.findById(id,{include:Menu,
    where : {[Op.iLike]:`${search}`}
    }).then(data=>{
        // res.send(data)
        res.render('view_menu',{restaurant:data,helper:require('../helper/help')})
    })
})



module.exports = router