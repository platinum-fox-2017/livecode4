'use strict'
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('./index.ejs')
})

router.use('/menus', require('./menu.js'))
router.use('/restaurant', require('./restaurant.js'))




module.exports = router;