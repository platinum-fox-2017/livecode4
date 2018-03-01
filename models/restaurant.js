'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  })
  //Class Method
  Restaurant.associate = function (models) {
    Restaurant.hasMany(models.Menu,{foreignKey:'restaurant_id'})
};

  return Restaurant;
};