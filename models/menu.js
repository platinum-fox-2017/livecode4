'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type:{
      type:DataTypes.STRING,
      validate:{
        isIn: {
          args: [['food', 'drink']],
          msg: "Isi menu type dengan food / drink"
        }
      }
    } ,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId : DataTypes.INTEGER,
  },{
    hooks:{
      beforeCreate:function(Menu,options){
        console.log(Menu)
        if(Menu.menu_type === 'food'&& Menu.price === 0 || Menu.price === null){
          this.price = 15000
        }
        else if(Menu.menu_type === 'food'&& Menu.price === 0 || Menu.price === null){
          this.price = 10000
        }
      }}
  });

  Menu.associate = function(models){
    Menu.belongsTo(models.Restaurant,{foreignKey: 'RestaurantId'})
  };
  return Menu;
};
