const express = require('express')
const router = express.Router()
const ControllerB = require('../controller/index.js').ControllerB

router.get('/', ControllerB.homepage)

// router.get('/add', ControllerB.itemAddPage)
// router.post('/add', ControllerB.itemAddPagePost)
//
// router.get('/edit/:id', ControllerB.itemEditPage)
// router.post('/edit/:id', ControllerB.itemEditPagePost)
//
// router.get('/delete/:id', ControllerB.itemDeletePage)

module.exports = router;
