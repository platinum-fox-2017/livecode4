const express = require('express')
const router = express.Router()
const MenuController = require('../controller/index.js').MenuController

router.get('/', MenuController.homepage)

router.post('/', MenuController.menuAddPagePost)

router.get('/:id/edit', MenuController.menuEditPage)
router.post('/:id/edit', MenuController.menuEditPagePost)

router.get('/:id/delete', MenuController.menuDeletePage)

module.exports = router;
