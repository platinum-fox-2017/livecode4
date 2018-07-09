'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  },{
    validate:{
      maxFood:function(idresto,menu){
        sequelize.models.Restaurant.findOne({
          where:{id:idresto}
        })
      }
    }
  });

  Restaurant.associate = function(models){
    Restaurant.hasMany(models.Menu,{foreignKey: 'RestaurantId'})
  };

  return Restaurant;
};