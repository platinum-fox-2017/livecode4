'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menuType: {
      type: DataTypes.STRING,
      validate: {
        typeCheck(value,next){
          if(value.toLowerCase() === 'food'){
            next()
          }else if(value.toLowerCase() === 'drink'){
            next()
          }else{
            next(`Isi menu type dengan food atau drink`)
          }
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: {
      type: DataTypes.INTEGER,
      validate: {
        checkMenuOrFood(value,next){
          let idRestaurant = Number(value)
          Menu.findAll({where:{RestaurantId:idRestaurant}}).then(allData=>{
            let countFood = 0
            let countDrink = 0
            const count = allData.map(element =>{
              if(element.menuType.toLowerCase() === 'food'){
                countFood++
              }else if(element.menuType.toLowerCase() === 'drink'){
                countDrink++
              }
            })

            if(countFood === 5 && this.menuType === 'food'){
              next(`Varian Food sudah maksimal !`)
            }else if(countDrink === 5 && this.menuType === 'drink'){
              next(`Varian Drink sudah maksimal !`)
            }else{
              next()
            }
          })
        }
      }
    }
  }, {
    hooks:{
      beforeCreate: function(user,option){
        if(user.price === 0 && user.menuType === 'food'){
          user.price = 15000
        }else if(user.price === 0 && user.menuType === 'drink'){
          user.price = 10000
        }
      },
      beforeUpdate:function(user,option){
        if(user.price === 0 && user.menuType === 'food'){
          user.price = 15000
        }else if(user.price === 0 && user.menuType === 'drink'){
          user.price = 10000
        }
      }
    }
  });

  Menu.associate = function(models){
    Menu.belongsTo(models.Restaurant,{
      foreignKey: 'RestaurantId'
    })
  }
  return Menu;
};