'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['food', 'drink']],
          msg: 'Isi menu type dengan food / drink'
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {
    hooks: {
        afterCreate: (instance) => {
          if (instance.price == 0) {
            let defaultPrice = 0;

            if (instance.menu_type == 'food') defaultPrice = 15000; else
            if (instance.menu_type == 'drink') defaultPrice = 10000;

            sequelize.models.Menu.update({
              price : defaultPrice
            },{
              where: { id: instance.id }
            })
          }
        }
    }
  });
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant);
  };
  return Menu;
};