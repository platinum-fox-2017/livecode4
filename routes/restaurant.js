'use strict';

const restaurantController = require('../controllers').restaurant;
const router = require('express').Router();

router.get('/', restaurantController.showAll);
router.get('/:id/view_menu', restaurantController.showMenu);
router.post('/:id/search', restaurantController.showFilterMenu);
// router.post('/', restaurantController.addForm);
// router.get('/:id/edit', restaurantController.showEditForm);
// router.post('/:id/edit', restaurantController.editData);
// router.get('/:id/delete', restaurantController.deleteData);

module.exports = router;