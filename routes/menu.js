const express = require('express')
const router = express.Router()
const {Restaurant,Menu} = require('../models')


router.get('/',(req,res)=>{
    Menu.findAll({include:Restaurant}).then(data=>{
      Restaurant.findAll().then(data2=>{
          res.render('menu',{menu:data,restaurant:data2,helper:require('../helper/help'),err:null})
      })
    })
})


router.post('/',(req,res)=>{
    let obj = {
        name        : req.body.name,
        menu_type   : req.body.menu_type,
        rating      : req.body.rating,
        price       : req.body.price,
        restaurant_id: req.body.restaurant_id
    }
    Menu.create(obj).then(result=>{
        res.redirect('/menus')
    }).catch(err=>{
        Menu.findAll({include:Restaurant}).then(data=>{
            Restaurant.findAll().then(data2=>{
                res.render('menu',{menu:data,restaurant:data2,helper:require('../helper/help'),err:err.errors[0].message})
            })
        })
    })
})

router.get('/edit/:id',(req,res)=>{
    let id = req.params.id
    Menu.findById(id).then(data=>{
        res.render('editmenu',{menu:data})
    }).catch(err=>{
        res.send(err)
    })
})

router.post('/edit/:id',(req,res)=>{
    let obj = {
        name        : req.body.name,
        menu_type   : req.body.menu_type,
        rating      : req.body.rating,
        price       : req.body.price,
        restaurant_id: req.body.restaurant_id
    }
    let id = req.params.id
    Menu.update(obj,{where:{id}}).then(data=>{
        res.redirect('/menus')
    }).catch(err=>{
        res.send(err)
    })
})

router.get('/delete/:id',(req,res)=>{
    let id = req.params.id
    Menu.destroy({where:{id}}).then(data=>{
        res.redirect('/menus')
    })
})




module.exports = router
