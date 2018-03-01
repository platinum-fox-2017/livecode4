'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type:{
      type: DataTypes.STRING,
      validate: {
         isIn:{
          args: [['food', 'drink']],
          msg: 'Isi menu type dengan food / drink'
         }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.Restaurant);
  };
  return Menu;
};
