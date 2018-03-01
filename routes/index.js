'use strict'
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Harusnya berisi Homepage')
})

router.use('/menu', require('./menu.js'))
router.use('/restaurant', require('./restaurant.js'))




module.exports = router;