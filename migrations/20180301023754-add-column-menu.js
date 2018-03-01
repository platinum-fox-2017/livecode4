'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Menus', 'RestaurantId', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Menus', 'RestaurantId');
  }
};
