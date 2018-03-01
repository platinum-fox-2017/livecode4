'use strict';
module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: ['food', 'drink'],
          msg: "isi menu type dengan food / drink!"
        },
        // isUpdate: (value, option) => {
        //   console.log('-----------', value)
        //   Menu.findOne({
        //     where: {
        //       menu_type: {
        //         [Op.ne]: value,
        //       }
        //     }
        //   })
        //   .then(data => {
        //     console.log('sini');
        //     console.log(data.id,'-----=+++++++++');
        //     if (data.menu_type === value) {
        //       next()
        //     } else {
        //       next('isi menu type dengan food / drink!')
        //     }
            
        //   })
        //   .catch(err => {
        //     console.log('sana')
        //   })
        // }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.STRING,
    id_restaurant: {
      type: DataTypes.INTEGER,
      validate: {
        checkRes: (value, next) => {     
          Menu.findAll({
            where: {
              id_restaurant: value
            }
          })
          .then(data => {
            if (data.length > 4) {
              console.log(data.length, '----------------------')
              next(`Varian Food sudah maksimal !`)
            } else {
              next()
            }
          })
          .catch(err => {
            console.log(err)
          })
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (value, option) => {
        if (value.menu_type == 'food' && value.price == 0) {
          value.price = 15000
        }
        if (value.menu_type == 'drink' && value.price == 0) {
          value.price = 10000
        }
      }
    }
  });
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant, { foreignKey: 'id_restaurant'} )
  };
  return Menu;
};