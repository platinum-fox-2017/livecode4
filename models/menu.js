'use strict';
const Op = require('sequelize').Op
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {type:DataTypes.STRING,
    validate:{
      validatea:function(value,next){
        if(value === 'food' || value === 'drink'){
          next()
        } else {
          next('menu type cuma bisa diisi food dan drink aja bro')
        }
      }
    }
  },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  },{
    hooks:{
    beforeCreate:(Menu,options)=>{
      if(Menu.price == 0){
        Menu.price = 15000
      }
    }
  }
})
Menu.associate = function(models) {
  Menu.belongsTo(models.Restaurant,{foreignKey:'restaurantId'})
};
return Menu;
};
