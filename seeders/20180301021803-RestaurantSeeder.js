'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let restaurants = [];
    for (var i = 0; i < 3; i++) {
      restaurants.push({
        name: `Restaurant ${ i + 1}`,
        address: `Address ${ i + 1}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('Restaurants', restaurants, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
