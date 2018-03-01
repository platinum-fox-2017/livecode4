'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Restaurants', [{
        name      : 'Bunga Rampai',
        address   : 'Menteng',
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        name      : 'GAIA Altitude',
        address   : 'Thamrin',
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        name      : 'Lucy in The Sky',
        address   : 'Kuningan',
        createdAt : new Date(),
        updatedAt : new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Restaurants', null, {});
  }
};
