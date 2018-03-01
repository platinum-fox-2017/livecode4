'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      allowNull: true,
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
  }, {
    hooks: {
      beforeCreate: (instance) => {
        if(instance.dataValues.menu_type == 'food') {
          if(!Number(instance.dataValues.price) || instance.dataValues.price == '') {
            instance.dataValues.price = 15000
          }
        } else if(instance.dataValues.menu_type == 'drink') {
          if(!Number(instance.dataValues.price) || instance.dataValues.price == '') {
            instance.dataValues.price = 10000
          }
        }
      },
      beforeBulkUpdate: (instance) => {
        if(instance.attributes.menu_type == 'food') {
          if(!Number(instance.attributes.price) || instance.attributes.price == '') {
            instance.attributes.price = 15000
          }
        } else if(instance.attributes.menu_type == 'drink') {
          if(!Number(instance.attributes.price) || instance.attributes.price == '') {
            instance.attributes.price = 10000
          }
        }
      }
    }
  });
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant)
    // associations can be defined here
  };
  return Menu;
};