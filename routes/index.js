'use strict';

module.exports = app => {
	
	app.use('/menus', require('./menu'));
	app.use('/restaurants', require('./restaurant'))
};