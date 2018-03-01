'use strict';
module.exports = (sequelize, DataTypes) => {
  var RestaurantMenu = sequelize.define('RestaurantMenu', {
    MenuId: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {});
  RestaurantMenu.associate = function(models) {
    // associations can be defined here
  };
  return RestaurantMenu;
};