'use strict';

const menuController = require('../controllers').menu;
const router = require('express').Router();

router.get('/', menuController.showAll);
router.post('/', menuController.addForm);
router.get('/:id/edit', menuController.showEditForm);
router.post('/:id/edit', menuController.editData);
router.get('/:id/delete', menuController.deleteData);

module.exports = router;