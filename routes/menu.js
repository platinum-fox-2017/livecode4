const Router = require('express').Router()

const Models = require('../models')
const Restaurant = Models.Restaurant
const Menu = Models.Menu

Router.get('/',(req,res)=>[
    Menu.findAll({
        include:[{model:Restaurant,attributes: ['name']}]
    }).then(menuAllData=>{
        Restaurant.findAll({attributes: ['name','id']}).then(restaurantData=>{
            res.render('Menu/menu',{
                dataMenu: menuAllData,
                restaurantData: restaurantData,
                err: null
            })
        })
    })
])

Router.get('/back',(req,res)=>{
    res.redirect('/')
})

Router.post('/',(req,res)=>{
    let menuObj = {
        name: req.body.name,
        menuType: req.body.menuType,
        rating: Number(req.body.rating),
        price: Number(req.body.price),
        RestaurantId: Number(req.body.restaurantId)
    }
    Menu.create(menuObj,{individualHooks:true}).then(justCreated=>{
        res.redirect(req.get(`referer`))
    }).catch((err)=>{
        const errors = err.errors.reduce((hasil,each)=>{
            hasil[each.path] = each.message
            return hasil
        },{})
        console.log(err)
        Menu.findAll({
            include:[{model:Restaurant,attributes: ['name']}]
        }).then(menuAllData=>{
            Restaurant.findAll({attributes: ['name','id']}).then(restaurantData=>{
                res.render('Menu/menu',{
                    dataMenu: menuAllData,
                    restaurantData: restaurantData,
                    err: errors
                })
            })
        })
    })
})

Router.get('/edit/:id',(req,res)=>{
    let menuId = Number(req.params.id)
    Menu.findById(menuId,{include:[{model:Restaurant}]}).then(menuData=>{
        Restaurant.findAll({attributes:['name','id']}).then(dataResto=>{
            res.render('Menu/edit',{
                menuData: menuData,
                restoData: dataResto,
                err:null
            })
        })
    })
})

Router.get('/edit/:id/back',(req,res)=>{
    res.redirect('/menu')
})

Router.post('/edit/:id',(req,res)=>{
    let menuId = Number(req.params.id)
    let obj = {
        name: req.body.name,
        menuType: req.body.menuType,
        rating: Number(req.body.rating),
        price: Number(req.body.price),
        RestaurantId: Number(req.body.RestaurantId)
    }

    
    Menu.update(obj,{where:{id:menuId},individualHooks:true}).then(success=>{
        res.redirect('/menu')
    }).catch((err)=>{
        
        let menuId = Number(req.params.id)
        Menu.findById(menuId,{include:[{model:Restaurant}]}).then(menuData=>{
            Restaurant.findAll({attributes:['name','id']}).then(dataResto=>{
                res.render('Menu/edit',{
                    menuData: menuData,
                    restoData: dataResto,
                    err: err.errors
                })
            })
        })
    })
})

Router.get('/delete/:id',(req,res)=>{
    let menuId = Number(req.params.id)
    Menu.destroy({where:{id:menuId}}).then(done =>{
        res.redirect(req.get(`referer`))
    })
})



module.exports = Router