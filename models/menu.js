'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        isMax(value,callback){
          sequelize.models.Menu.findAll({where:{menu_type:'food'}})
            .then((data)=>{
              let count = 0;
              for(let i in data){
                count++
              }
              if(count>=5){
                callback('Varian Food sudah maksimal !')
              }
              callback('')
            })
        },
        isFoodOrDrink(value, callback){
          if(value=='food' || value=='drink'){
            callback('')
          } else {
            callback('Isi menu type dengan food / drink')
          }
        }
      },
      hooks:{
        afterValidate: (user,option)=>{
          sequelize.Menu.create({
            price: 15000
          },{where:{price:0,menu_type:'food'}})
        },
        afterValidate: (user,option)=>{
          sequelize.Menu.create({
            price: 10000
          },{where:{price:0,menu_type:'drink'}})
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant)
  };
  return Menu;
};
