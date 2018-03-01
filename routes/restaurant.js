const express = require('express');
const router = express.Router();
const models = require('../models');
const sequelize = require('sequelize');
const op = sequelize.Op;

router.get('/', (req,res) => {
    models.Restaurant.findAll()
        .then(restaurants => {
            res.render('./restaurant/restaurant',{restaurants:restaurants});

        })
});

router.get('/:id/view_menu', (req,res) => {
    models.Restaurant.findById(req.params.id,{
        include:[{model:models.Menu}]
    }).then(restaurant => {
        res.render('./restaurant/restaurant-view-menu',{restaurant: restaurant});
    })
})

router.post('/:id/search', (req,res) => {
    let keys = req.body.search_type;
    let search = req.body.search;
    console.log("KEys" + keys);
    console.log("searcgh" + search);

    models.Restaurant.findById(req.params.id,{
        include:[{
            model:models.Menu
        }]
    }).then(restaurant => {
        models.Menu.findAll({
            where:{
                RestaurantId:req.params.id,
                [keys]:{
                    [op.iLike]: '%'+search+'%'
                }
            }
        }).then((menus) => {
            // res.send(menus);
            res.render('./restaurant/restaurant-search',{restaurant: restaurant,menus:menus});
        })
    });

    // models.Menu.findAll({
    //     where:{
    //         RestaurantId:req.params.id,
    //         [keys]:{
    //             [op.iLike]: '%'+search+'%'
    //         }
    //     }
    // }).then((menus) => {
    //     res.send(menus)
    //     // res.render('./restaurant/restaurant-search',{menus: menus});
    // })
})


module.exports = router;
