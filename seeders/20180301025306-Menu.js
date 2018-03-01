'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [{
      name: 'Beef Teriyaki',
      menu_type: 'food',
      rating: 7,
      price: 45000,
      restaurantId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Grilled Chicken',
      menu_type: 'food',
      rating: 9,
      price: 40000,
      restaurantId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Coca Cola',
      menu_type: 'drink',
      rating: 10,
      price: 15000,
      restaurantId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
