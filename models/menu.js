'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = (sequelize, DataTypes) => {
  var menu = sequelize.define('menu', {
    nama: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate:{
        pilihan(value,next) {
          if(value ==='food' || value ==='drink'){
            next()
          }else{
            next('isi menu type food atau drink')
          }
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    restaurant_Id : {
      type:DataTypes.INTEGER,
      validate:{
        stock(value,next) {
          menu.findAll({
            where: {
              restaurant_Id:value}
          }).then(data=>{
            if(data.length>5){
              next('Varian Food sudah maksimal !')
            }else{
              next()
            }
          })
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (values,option) => {
          if (values.price==='0') {
            if(values.menu_type==='food'){
              values.price=15000
            }
            else if(values.menu_type==='drink'){
              values.price=10000
            }
          }
        }
      }
  });
  menu.associate = function(models) {
    menu.belongsTo(models.restaurant, { foreignKey: 'restaurant_Id'})
  };
  return menu;
};
