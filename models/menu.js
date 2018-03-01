'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        isIn:
          {
            args: [['food', 'drink']],
            msg: 'Isi menu type dengan food or drink'
          }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  }, {
      hooks: {
        beforeCreate: (menu, options) => {
          console.log('ini price', menu)
          console.log('INI HARGA 0     ', menu.price)
          console.log(typeof menu.price)
          if (parseInt(menu.price) <= 0) {
            menu.price = 10000
          }
        }
      }
    });
  Menu.associate = function (models) {
    // associations can be defined here
    Menu.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' })
  };
  return Menu;
};