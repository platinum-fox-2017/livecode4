'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [{
      name: 'Beef Teriyaki',
      menu_type: 'food',
      rating: Math.ceil(Math.random()*10),
      price: Math.ceil(Math.random() * 100000),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
        name: 'Grilled Chicken',
        menu_type: 'food',
        rating: Math.ceil(Math.random() * 10),
        price: Math.ceil(Math.random() * 100000),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Coca Cola',
        menu_type: 'drink',
        rating: Math.ceil(Math.random() * 10),
        price: Math.ceil(Math.random() * 100000),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Ocha Tea',
        menu_type: 'drink',
        rating: Math.ceil(Math.random() * 10),
        price: Math.ceil(Math.random() * 100000),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Beef Yakiniku',
        menu_type: 'food',
        rating: Math.ceil(Math.random() * 10),
        price: Math.ceil(Math.random() * 100000),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
