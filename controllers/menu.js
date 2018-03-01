'use strict';

const models = require('../models');

module.exports = {
	showAll(req, res) {
		return models.Menu.findAll({
			include: models.Restaurant
			})
			.then(menus => {
				// console.log(menus)
				models.Restaurant.findAll()
					.then(restaurants => res.status(201).render(`./pages/menus/list_menu.ejs`, { status: req.query.status, message: req.query.message, menus: menus, restaurants: restaurants }))
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},

	addForm(req, res) {
		// console.log(req.body);
		return models.Menu.create({
			name: req.body.name,
			menu_type: req.body.menu_type,
			rating: req.body.rating,
			price: req.body.price,
			RestaurantId: req.body.restaurant_id
		})
			.then(menu => res.status(201).redirect(`/menus?status=1&message=Data ${menu.name} berhasil ditambahkan`))
			.catch(error => res.status(400).redirect(`/menus?status=0&message=${error.message}`));
	},

	showEditForm(req ,res) {
    	return models.Menu.findById(req.params.id)
    		.then(menu => {
    			models.Restaurant.findAll()
    				.then(restaurants => res.status(201).render(`./pages/menus/edit_menu.ejs`, { status: req.query.status, message: req.query.message, menu: menu, restaurants: restaurants }))
    				.catch(error => res.status(400).send(error));
    		})
    		.catch(error => res.status(400).send(error));
    },

    editData(req, res) {
    	return models.Menu.findById(req.params.id)
    		.then(menu => {
    			menu.update({
    				name: req.body.name,
    				menu_type: req.body.menu_type,
					rating: req.body.rating,
					price: req.body.price,
					RestaurantId: req.body.restaurant_id
				})
				.then(item => res.status(201).redirect(`/menus/${req.params.id}/edit?status=1&message=Data ${req.body.name} berhasil diubah`))
				.catch(error => res.status(400).redirect(`/menus/${req.params.id}/edit?status=0&message=${error.message}`));
    		})
    		.catch(error => res.status(400).redirect(`/menus/${req.params.id}/edit?status=0&message=${error.message}`));
    },

    deleteData(req, res) {
        return models.Menu.findById(req.params.id).then(menu => {
        	menu.destroy()
        		.then(menu => res.status(201).redirect(`/menus`))
        		.catch(error => res.status(400).redirect(`/menus?status=0&message=${error.message}`));
        	});
    },
};