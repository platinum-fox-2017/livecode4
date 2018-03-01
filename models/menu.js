'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
        type: DataTypes.STRING,
        validate:{
            isIn: {
                args: [['food','drink']],
                msg: "Isi menu type dengan food / drink"
            }
        }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    RestaurantId: {
        type: DataTypes.INTEGER,
        validate: {
            isMax(value, next) {
                Menu.findAll({
                    where:{
                        menu_type:"food",
                        RestaurantId:value
                    }
                }).then((restaurants => {
                    if(this.menu_type=='food'){
                        if(restaurants.length>4){
                            next("Varian Food sudah maksimal !");
                        }
                        else {
                            next();
                        }
                    }
                    else{
                        next();
                    }
                }));
            }
        }
    }
  }, {
      hooks:{
          beforeCreate: (instances, options) => {
              if(instances.price == null || instances.price == 0){
                  if(instances.menu_type == 'food'){
                      instances.price = 15000;
                  }
                  else{
                      instances.price = 10000;
                  }
              }
          },
          beforeBulkUpdate: (options) => {
              if(options.attributes.price == null || options.attributes.price == 0){
                  if(options.attributes.menu_type == 'food'){
                      options.attributes.price = 15000;
                  }
                  else{
                      console.log("MASUKKK");
                      options.attributes.price = 10000;
                  }
              }

          }
      }
  });
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.Restaurant);
  };
  return Menu;
};
