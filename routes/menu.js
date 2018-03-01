const express = require('express');
const router = express.Router();

const Model = require('../models');
const Menus = Model.Menus;
const Restaurants = Model.Restaurants;

const Help = require('../helper/help');



//READ
router.get('/',(req,res,next)=>{
    Menus.findAll()
    .then((menus) => {
        Restaurants.findAll()
        .then((restaurants)=> {
            // res.send(menus);
            // res.send(restaurants);
            res.render('./menu/menu',{
                menus: menus,
                restaurants: restaurants,
                format_currency: Help.format_currency,
                err: null,
        });
        })
        .catch((err)=> {
            res.send(err)
        });
    })
});
//ADD
router.post('/',(req,res,next)=>{
    let new_menu ={};
    new_menu.name = req.body.name;
    new_menu.menu_type = req.body.menu_type;
    new_menu.rating = req.body.rating;
    new_menu.price = req.body.price;
    new_menu.id_restaurant = req.body.id;
    // res.send(new_menu);
    Menus.create(new_menu,{
        individualHooks: true
    })
    .then(()=> res.redirect('/menus/'));
});
//EDIT
router.get('/:id/edit',(req,res,next)=>{
    // res.send(req.params.id)
    let search_id = req.params.id;
    Menus.findById(search_id)
    .then((menu)=>{
        Restaurants.findAll()
        .then((restaurants)=>{
            // res.send(restaurants);
            res.render('./menu/form_edit_menu',{
                menu: menu,
                restaurants: restaurants,
            })
        })
    })
});
router.post('/:id/edit',(req,res,next)=>{
    // res.send(req.params)
    // res.send(req.body)
    let updated_menu_id = Number(req.params.id);
    let updated_menu = req.body;
    Menus.update(updated_menu,{
        where:{
            id: updated_menu_id
        }
    })
    .then(()=> res.redirect('/menus'));
});
//DELETE
router.get('/:id/delete',(req,res,next)=>{
    Menus.destroy({
        where: {
           id : req.params.id
        }
    })
    .then(()=> res.redirect('/menus'));
});
module.exports = router;

// GET	/menus/:id/edit	Menampilkan form edit Menu, dengan default value form dari nilai yang sekarang
// POST	/menus/:id/edit	Update data menu berdasarkan id
// GET	/menus/:id/delete	Delete data menu berdasarkan id