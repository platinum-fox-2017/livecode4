'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Menus', [
      {
        name: 'Beef Teriyaki',
        menu_type: 'food',
        rating: 7,
        price: 45000,
        id_restaurant: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Grilled Chicken',
        menu_type: 'food',
        rating: 9,
        price: 40000,
        id_restaurant: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Beef Teriyaki',
        menu_type: 'food',
        rating: 7,
        price: 45000,
        id_restaurant: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
