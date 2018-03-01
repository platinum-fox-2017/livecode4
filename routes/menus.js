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
            listMenu: listMenu,
            err: request.query.data
        };
        // response.send(obj)
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
                    response.redirect(`/menus?data=${err.message}`)
                    // response.render('showmenu.ejs', {err: err.message})
               })
})

router.get('/:id/edit', function(request,response) {
    let obj = {
        err: request.query.data
    }
    response.render('./editmenu.ejs', obj);
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
            .catch((err) => {
                response.redirect(`/menus/${id}/edit?data=${err.message}`)
                // response.render('showmenu.ejs', {err: err.message})
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