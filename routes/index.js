const express = require('express')
const router = express.Router()
const Controller = require('../controller/index.js').Controller

router.use('/menus', require('./menu.js'))
// router.use('/page2', require('./routeB.js'))
// router.use('/page3', require('./routeC.js'))

router.get('/', Controller.home)

module.exports = router;
