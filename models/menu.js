'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type:{
      type:DataTypes.STRING,
      validate: {
        checkMenuType(value) {
          if(value != "food" && value != "drink") {
            throw new Error('Isi menu type dengan food / drink')
          }
        },
        checkTooManyFoods(value,callback) {
          if(value == "food") {
            Menu.findAll({
              where : {
                RestaurantId : this.RestaurantId,
                menu_type   : 'food'
              }
            })
            .then(menus => {
              if(menus.length >= 5) {
                callback('Varian Food sudah maksimal !')
              } else {
                callback()
              }
            })
          }
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {
    hooks :{
      beforeCreate : (menu) => {
        if (menu.price == '' && menu.menu_type == 'food') {
          menu.price = 15000
        } else if (menu.price == '' && menu.menu_type == 'drink') {
          menu.price = 10000
        }
      },
      beforeUpdate : (menu) => {
        if (menu.price == '' && menu.menu_type == 'food') {
          menu.price = 15000
        } else if (menu.price == '' && menu.menu_type == 'drink') {
          menu.price = 10000
        }
      }
    }
  });
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant)
  };
  return Menu;
};