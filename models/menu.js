'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        isType(value){
          if(value !== 'food'){
            if(value !== 'drink'){
              throw new Error('Isi menu type dengan food/drink')
            }
          }
        }        
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (menu, options) => {
        if(menu.menu_type == 'food'){
          if(menu.price == 0){
            menu.price = 15000
          }
        }else if(menu.menu_type == 'drink'){
          if(menu.price == 0){
            menu.price = 10000
          }
        }
      },
      beforeUpdate: (menu, options) => {
        if(menu.menu_type == 'food'){
          if(menu.price == 0){
            menu.price = 15000
          }
        }else if(menu.menu_type == 'drink'){
          if(menu.price == 0){
            menu.price = 10000
          }
        }
      }
    }
  });
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant);
  };

  return Menu;
};