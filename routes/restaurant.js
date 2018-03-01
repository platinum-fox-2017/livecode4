const router = require('express').Router()
const { Menu, Restaurant } = require('../models');

router.get('/', (req, res) => {
    Restaurant.findAll()
    .then(dataRes => {
        let err = null
        res.render('restaurant', { dataRes})
    })
    .catch(err => {
        console.log(err)
    })
    .catch(err => {
        console.log(err)
    })
});

router.get('/:id/view_menu', (req,res) => {
    Menu.findAll({
        where: {
            id_restaurant: req.params.id
        }
    })
    .then(data => {
       Restaurant.findById(req.params.id)
       .then(dataRes => {
           console.log(data)
           res.render('view_menu', { data, dataRes, helper: require('../helper/format_currency') })
       })
       .catch(err => {
           console.log(err)
       })
    })
})

router.post('/:id/search', (req,res) => {
    console.log(req.params.id);
    console.log(req.body.type_search);
    console.log(req.body.input);
    var query = null
    if (req.body.type_search === 'name') {
        query = 'name';
    } else if (req.body.type_search === 'menu_type') {
        query = 'menu_type'
    } else if (req.body.type_search === 'rating') {
        query = 'rating'
    } else {
        query = 'price'
    }

    // Menu.findAll({
    //     where: {
    //         query: req.body.input
    //     }
    // })
    // .then(dataSearch => {
    //     console.log(dataSearch)
    // })
    // .catch(err => {
    //     console.log(err)
    // })
})


module.exports = router