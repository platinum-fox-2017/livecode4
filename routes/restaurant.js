const express = require('express')
const router = express.Router()
const RestaurantController = require('../controller/index.js').RestaurantController

router.get('/', RestaurantController.homepage)

router.get('/:id/view_menu', RestaurantController.viewMenu)
router.post('/:id/search', RestaurantController.search)
//
// router.get('/edit/:id', RestaurantController.itemEditPage)
// router.post('/edit/:id', RestaurantController.itemEditPagePost)
//
// router.get('/delete/:id', RestaurantController.itemDeletePage)

module.exports = router;
