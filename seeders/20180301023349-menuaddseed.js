'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Menus', [
      {
        name: 'beef teriyaki',
        menu_type: 'food',
        rating: 9,
        price: 45000,
        RestaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'grilled chicken',
        menu_type: 'food',
        rating: 9,
        price: 35000,
        RestaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ocha',
        menu_type: 'drink',
        rating: 9,
        price: 18000,
        RestaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Menus', null, {})
  }
};
