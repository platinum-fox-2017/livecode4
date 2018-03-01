'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type:{
      type: DataTypes.STRING,
      validate : {
         isIn: {
           args : [['food', 'drink']],
           msg : "Isi menu type dengan food / drink"
         },
    }
  },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    hooks: {
    beforeCreate: (instance) => {

        if(instance.price==='0' && instance.menu_type==='food'){
          instance.price=15000
        }
        else if(instance.price==='0' &&instance.menu_type==='drink'){
          instance.price=10000
        }

      },
      beforeUpdate: (instance) => {

          if(instance.price==='0' && instance.menu_type==='food'){
            instance.price=15000
          }
          else if(instance.price==='0' &&instance.menu_type==='drink'){
            instance.price=15000
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
