'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['food', 'drink']],
          msg: 'Isi Menu Type dengan food / drink'
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant, {foreignKey: 'restaurantId'})
  };
  return Menu;
};
