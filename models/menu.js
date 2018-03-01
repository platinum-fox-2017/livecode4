'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type:DataTypes.STRING,
      validate: {
        isIn: {
          args:[['food', 'drink']],
          msg: "Isi menu type dengan food/drink"
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {
    // validate: {
    //   notMoreThan5(next) {
        // Menu.findAll({
        //   include: [{model: sequelize.models.Restaurant}],
        //   where: {
        //     RestaurantId: this.RestaurantId,
        //     menu_type: this.menu_type
        //   }
        // })
        // .then(data =>{
        //   if(data.length>=5) {
        //     next(`${this.Restaurant.name} telah memiliki 5 menu yang type nya ${this.menu_type}`)
        //   }
        // })
    //   }
    // },
    hooks: {
      beforeValidate: (instance, options) => {
        if(instance.price<1) {
          if(instance.menu_type === "food") {
            instance.price = 15000;
          }
          else if(instance.menu_type === "drink") {
            instance.price = 10000;
          }
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