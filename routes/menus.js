const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models');

router.get('/', function(request,response) {
    models.Menu.findAll().then(listMenu => {
        // projects will be an array of all Project instances
        let obj = {
            listMenu: listMenu
        };
        response.render('./showmenu.ejs', obj);
    })
})

router.post('/', function(request,response) {
    // response.send(request.body);
    // console.log('------', request.body);
    var obj = {
        name: request.body.name,
        menu_type: request.body.menu_type,
        rating: request.body.rating,
        price: request.body.price,
        restaurantId: request.body.restaurantId,
    }
    
    models.Menu.create(obj)
                .then(() => {
                    response.redirect('/menus')
                })
                .catch((err) => {
               })
})





module.exports = router;