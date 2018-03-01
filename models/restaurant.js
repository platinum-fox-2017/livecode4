'use strict';
module.exports = (sequelize, DataTypes) => {
  var restaurant = sequelize.define('restaurant', {
    nama: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  restaurant.associate = function(models) {
    // associations can be defined here
  };
  return restaurant;
};