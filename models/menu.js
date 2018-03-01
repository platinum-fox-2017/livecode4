'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type:{
      type: DataTypes.STRING,
      validate:{
        isIn : {
          args: [['food', 'drink']],
          msg: "harus diisi food atau drink pada kolom menu type"
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER
  },{
    hooks:{
      beforeCreate:(menu,option)=>{
        if(menu.menu_type === 'food' && menu.price == 0){
          menu.price = 15000 
        }else if(menu.menu_type === 'drink' && menu.price == 0){
          menu.price = 10000
        }
      },
      afterUpdate:(menu,option)=>{
        if(menu.menu_type === 'food' && menu.price == 0){
          menu.price = 15000 
        }else if(menu.menu_type === 'drink' && menu.price == 0){
          menu.price = 10000
        }
      }
    }
  })
  //Class Method
  Menu.associate = function (models) {
    Menu.belongsTo(models.Restaurant,{foreignKey:'restaurant_id'})
};
  return Menu;
};

