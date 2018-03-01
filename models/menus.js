'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menus = sequelize.define('Menus', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        check_food_drink: function(value,next){
          if(value === 'food')next();
          if(value === 'drink')next();
          else next(`Isi menu type dengan food / drink`);
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    id_restaurant: DataTypes.INTEGER
  },{
    hooks:{
      beforeCreate: (instance, options)=> {
        if(instance.menu_type === 'food' && instance.price == '0') instance.price = 15000
        if(instance.menu_type === 'drink' && instance.price == '0') instance.price = 10000
      }
    }
  });

  Menus.associate = models => {
    Menus.belongsTo(models.Restaurants,{
      foreignKey:"id_restaurant",
    })
  }
  return Menus;
};

