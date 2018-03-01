'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type:{
      type: DataTypes.STRING,
      // validate:{
      //   validateMenu: function(value){
      //     if(value !== 'drink' || value !== 'food'){
      //       throw new Error('Isi menu type dengan food / drink')
      //     }
      //   }
      // }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    id_restaurant: DataTypes.INTEGER
  }, {
    hooks:{
      beforeCreate(Menu, options){
        if (Menu.menu_type ==='food' && Menu.price===0){
          Menu.price = 15000
        }else if (Menu.menu_type ==='drink' && Menu.price===0){
          Menu.price = 10000
        }
      },
      afterUpdate(Menu, options){
        if (Menu.menu_type ==='food' && Menu.price===0){
          Menu.price = 15000
        }else if (Menu.menu_type ==='drink' && Menu.price===0){
          Menu.price = 10000
        }
      },
    }
  });
  Menu.associate = function (models) {
    Menu.belongsTo(models.Restaurant,{
      foreignKey:'id_restaurant',
    })
};
  return Menu;
};