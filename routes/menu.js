'use strict'
const router = require('express').Router();
const Models = require('../models')

router.get('/', (req,res) => {
    Models.Menu.findAll()
    .then(menus => {
        res.render('../views/menu/listMenu.ejs', {menus: menus})
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/:id/edit', (req,res) => {
    res.send('Edit Menu');
})

module.exports = router