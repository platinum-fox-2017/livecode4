'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.Menu)
  };
  return Restaurant;
};
