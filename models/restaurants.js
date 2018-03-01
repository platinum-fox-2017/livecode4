'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurants = sequelize.define('Restaurants', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  });
  Restaurants.associate = models => {
    Restaurants.hasMany(models.Menus,{
      foreignKey:"id_restaurant",
    })
  }
  return Restaurants;
};