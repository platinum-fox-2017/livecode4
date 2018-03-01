'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Restaurant.associate = function (models){
    Restaurant.hasMany(models.Menu,{
      foreignKey: 'RestaurantId'
    })
  }
  return Restaurant;
};