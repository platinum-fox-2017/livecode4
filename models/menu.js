'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /(food|drink)/,
          msg: 'Isi menu type dengan food / drink'
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    id_restaurant: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (menu, options) => {
        if (menu.menu_type == 'food' && menu.price == 0) {
          menu.price = 15000
        }
        else if (menu.menu_type == 'drink' && menu.price == 0) {
          menu.price = 10000
        }
      },
      beforeUpdate: (instance, options) => {
        if (instance.menu_type == 'food' && instance.price === '0') {
          instance.price = 15000
        }
        else if (instance.menu_type == 'drink' && instance.price === '0') {
          instance.price = 10000
        }
      }
    }

  });
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.Restaurant, {
      foreignKey: 'id_restaurant'
    })
  };
  return Menu;
};
