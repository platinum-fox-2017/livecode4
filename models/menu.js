'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^(food|drink)$/,
          msg: 'Isi menu type dengan food/drink'
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (instance) => {
        console.log(instance)
        if (instance.menu_type.toLowerCase() === 'food' && instance.price == 0){
          instance.price = 15000
        } else if (instance.menu_type.toLowerCase() === 'drink' && instance.price == 0){
          instance.price = 10000
        }
      },
      beforeUpdate: (instance) => {
        console.log(instance)
        if (instance.menu_type == 'food' && instance.price == 0){
          instance.price = 15000
        } else if (instance.menu_type == 'drink' && instance.price == 0){
          instance.price = 10000
        }
      }
    }
  });
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.Restaurant)
  };
  return Menu;
};