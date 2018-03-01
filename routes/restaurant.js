const Router = require('express').Router()
const Op = require('sequelize').Op

const Models = require('../models')
const Restaurant = Models.Restaurant
const Menu = Models.Menu

Router.get('/',(req,res)=>{
    Restaurant.findAll().then(restaurantData =>{
        res.render('Restaurant/restaurant',{
            dataResto: restaurantData
        })
    })
})

Router.get('/back',(req,res)=>{
    res.redirect('/')
})

Router.get('/view/:id',(req,res)=>{
    let restoId = Number(req.params.id)
    Menu.findAll({where:{RestaurantId:restoId}}).then(MenuData=>{
        Restaurant.findById(restoId,{attribute:['name']}).then(restoData =>{
            res.render('Restaurant/viewmenu',{
                menuData: MenuData,
                restoData: restoData,
                helper: require('../helpers/numberMoney')
            })
        })
    })
})

Router.get('/view/:id/back',(req,res)=>{
    res.redirect('/restaurant')
})

Router.post('/view/:id/search',(req,res)=>{
    let keyword = req.body.keyWord
    let key = req.body.key
    let restoId = Number(req.params.id)
    let obj = {}
    if(req.body.key === 'rating' ||req.body.key === 'price'){
        obj[req.body.key] = Number(req.body.keyWord)
    }else{
        obj[req.body.key] = {[Op.iLike]: `%${keyword}%`,}
    }
    
    Menu.findAll({
        where:obj
    }).then(menuData =>{
        Restaurant.findById(restoId,{attribute:['name']}).then(restoData =>{
            res.render('Restaurant/viewmenu',{
                menuData: menuData,
                restoData: restoData,
                helper: require('../helpers/numberMoney')
            })
        })
    })
})  

module.exports = Router