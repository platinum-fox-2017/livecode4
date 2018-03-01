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
        },
        // isFoodOrDrink(value) {
        //   console.log(value)
        //   if(value !== 'food' || value !== 'drink') {
        //     throw new Error('Isi menu type dengan food / drink')
        //   }
        // }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant)
    // associations can be defined here
  };
  return Menu;
};