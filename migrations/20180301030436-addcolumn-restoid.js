'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Menus', 'RestaurantId', {type: Sequelize.INTEGER})
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
