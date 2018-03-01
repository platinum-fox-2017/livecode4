const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models');

router.get('/', function(request,response) {
    models.Menu.findAll({
        include: [
          {model: models.Restaurant}  
        ],
    }).then(listMenu => {
        // projects will be an array of all Project instances
        let obj = {
            listMenu: listMenu
        };
        // response.send(listMenu)
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

router.get('/:id/edit', function(request,response) {
    response.render('./editmenu.ejs');
})

router.post('/:id/edit', function(request,response) {
    let id = request.params.id;

    var obj = {
        name: request.body.name,
        menu_type: request.body.menu_type,
        rating: request.body.rating,
        price: request.body.price,
        restaurantId: request.body.restaurantId,
    }
    
    models.Menu.update(obj, {where: {id: id}})
            .then(() => {
                response.redirect('/menus');
                console.log('Successfully updated menu data'); 
            })

})


router.get('/:id/delete', function(request,response) {
    let id = request.params.id

    models.Menu.destroy({where: {id: id}})
    .then(() => {  
        // console.log();
        response.redirect('/menus');
    })
    
})





module.exports = router;