'use strict';

const models = require('../models');
const sequelize = require('sequelize');

module.exports = {
	showAll(req, res) {
		return models.Restaurant.findAll()
			.then(restaurants => res.status(201).render(`./pages/restaurants/list_restaurant.ejs`, { status: req.query.status, message: req.query.message, restaurants: restaurants }))
			.catch(error => res.status(400).send(error));
	},

	showMenu(req, res) {
		return models.Restaurant.findById(req.params.id)
			.then(restaurant => {
				restaurant.getMenus()
				.then(menus => res.status(201).render(`./pages/restaurants/list_menu.ejs`, { status: req.query.status, message: req.query.message, restaurant: restaurant, menus: menus }))
			})
			.catch(error => res.status(400).send(error));
	},

	showFilterMenu(req, res) {
		return models.Restaurant.findById(req.params.id)
			.then(restaurant => {
				switch(req.body.search_by) {
					case "name" : {
						models.Menu.findAll({
							where: {
								RestaurantId: req.params.id,
								name: {
									[sequelize.Op.iLike]: `%${req.body.keyword}%`
		                		}
							}
						})
						.then(menus => res.status(201).render(`./pages/restaurants/list_menu.ejs`, { status: req.query.status, message: req.query.message, restaurant: restaurant, menus: menus }))
					}

					case "menu_type" : {
						models.Menu.findAll({
							where: {
								RestaurantId: req.params.id,
								menu_type: {
									[sequelize.Op.iLike]: `%${req.body.keyword}%`
		                		}
							}
						})
						.then(menus => res.status(201).render(`./pages/restaurants/list_menu.ejs`, { status: req.query.status, message: req.query.message, restaurant: restaurant, menus: menus }))
					}

					case "rating" : {
						models.Menu.findAll({
							where: {
								RestaurantId: req.params.id,
								rating: req.body.keyword
							}
						})
						.then(menus => res.status(201).render(`./pages/restaurants/list_menu.ejs`, { status: req.query.status, message: req.query.message, restaurant: restaurant, menus: menus }))
					}

					case "price" : {
						models.Menu.findAll({
							where: {
								RestaurantId: req.params.id,
								price: req.body.keyword
							}
						})
						.then(menus => res.status(201).render(`./pages/restaurants/list_menu.ejs`, { status: req.query.status, message: req.query.message, restaurant: restaurant, menus: menus }))
					}
				}
			})
			.catch(error => res.status(400).send(error));
	},
};