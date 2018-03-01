'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['Food', 'Beverages']],
          msg: 'Isi menu type dengan Food / Beverages'
        } 
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.Restaurant, {foreignKey:'restaurantId'});
  };
  return Menu;
};