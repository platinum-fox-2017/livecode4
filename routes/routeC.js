const express = require('express')
const router = express.Router()
const ControllerC = require('../controller/index.js').ControllerC

router.get('/', ControllerC.homepage)
//
// router.get('/add', ControllerC.itemAddPage)
// router.post('/add', ControllerC.itemAddPagePost)
//
// router.get('/edit/:id', ControllerC.itemEditPage)
// router.post('/edit/:id', ControllerC.itemEditPagePost)
//
// router.get('/delete/:id', ControllerC.itemDeletePage)

module.exports = router;
