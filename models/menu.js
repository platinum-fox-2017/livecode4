'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type     : DataTypes.STRING,
      validate : {
        isIn: {
          args : [['food', 'drink']],
          msg  : 'Isi form menu type dengan food / drink'
        }
      },
      hooks    : {
        afterCreate : (menu, options) => {
          if(menu.menu_type === 'food' && menu.price === 0) {
            menu.price = 15000
          } else if(menu.menu_type === 'drink' && menu.price === 0) {
            menu.price = 10000
          }
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.Restaurant, {
      foreignKey: 'restaurantId'
    })
  };
  return Menu;
};
