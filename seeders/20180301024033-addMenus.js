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
    

   return queryInterface.bulkInsert('Menus', [{
    name: 'Pizza',
    menu_type: 'Food',
    rating: 7,
    price: 75000,
    createdAt: new Date(),
    updatedAt: new Date(),
    restaurantId: 1
  },{
    name: 'Pasta',
    menu_type: 'Food',
    rating: 5,
    price: 55000,
    createdAt: new Date(),
    updatedAt: new Date(),
    restaurantId: 1
  },{
    name: 'Tea',
    menu_type: 'Beverages',
    rating: 5,
    price: 25000,
    createdAt: new Date(),
    updatedAt: new Date(),
    restaurantId: 1
  },{
    name: 'Big Mac',
    menu_type: 'Food',
    rating: 10,
    price: 55000,
    createdAt: new Date(),
    updatedAt: new Date(),
    restaurantId: 2
  },{
    name: 'Fries',
    menu_type: 'Food',
    rating: 5,
    price: 15000,
    createdAt: new Date(),
    updatedAt: new Date(),
    restaurantId: 2
  },{
    name: 'Coca Cola',
    menu_type: 'Beverages',
    rating: 3,
    price: 10000,
    createdAt: new Date(),
    updatedAt: new Date(),
    restaurantId: 2
  },{
    name: 'Original Fried Chicken',
    menu_type: 'Food',
    rating: 8,
    price: 35000,
    createdAt: new Date(),
    updatedAt: new Date(),
    restaurantId: 3
  },{
    name: 'Spicy Fried Chicken',
    menu_type: 'Food',
    rating: 9,
    price: 35000,
    createdAt: new Date(),
    updatedAt: new Date(),
    restaurantId: 3
  },{
    name: 'Sprite',
    menu_type: 'Beverages',
    rating: 5,
    price: 10000,
    createdAt: new Date(),
    updatedAt: new Date(),
    restaurantId: 3
  }], {});

},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
