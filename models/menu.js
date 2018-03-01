'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate : {
        isFoodType(value){
          if (value === 'food' || value === 'drink') {

          } else {
            throw new Error('Isi menu type dengan food / drink')
          }
        }

      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: {
      type: DataTypes.INTEGER,
      validate: {
        isNotMaxMenu(value, callback){
          sequelize.models.Restaurant.findAll({
            where: {
              id:value
            },
            include: [
              {
                model:sequelize.models.Menu,
                where: {
                  menu_type: 'food'
                }
              }
            ]
          }).then(foundRestaurants => {
            // console.log(foundRestaurants);
            // console.log(value);
            console.log(foundRestaurants[0].Menus.length);
            if (foundRestaurants[0].Menus.length > 5) {
              callback('Varian Food sudah maksimal ')
            } else {
              callback()
            }
          })
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        if (instance.menu_type === 'food' && parseInt(instance.price) == 0) {
          instance.price = 15000;
        } else if (instance.menu_type === 'drink' && parseInt(instance.price) == 0) {
          instance.price = 10000;
        }
      },
      beforeBulkUpdate: (instance, options) => {
        console.log(instance.attributes.price+'============================');
        if (instance.attributes.menu_type === 'food' && parseInt(instance.attributes.price) == 0) {
          instance.attributes.price = 15000;
        } else if (instance.attributes.menu_type === 'drink' && parseInt(instance.attributes.price) == 0) {
          instance.attributes.price = 10000;
        }
      }
    }
  });
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.Restaurant)
  };
  return Menu;
};
