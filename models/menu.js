'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        // isIn: {
        //   arg: [['food', 'drink']],
        //   msg: ""
        // }
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
  }, {});
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant);
  };

  return Menu;
};