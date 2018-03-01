'use strict';
const Op = require('sequelize').Op
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: {
      type: DataTypes.STRING,
      validate: {
        isCorrectFormat: (value) => {
          let check = /(^food$|^drink$)/
          if (value.search(check) === -1) {
            throw new Error(`Validation error: Isi menu type dengan food / drink`)
          }
        },
        checkVariant: (value, next) => {
          Menu.findAll({
            where: {
              menu_type: value
            }
          }).then(value => {
            if (value === 'food' && value > 5) {
              next(`Variant Food sudah maksimal!`)
            }else {
              next()
            }
          }).catch(err => {
            next(err)
          })
        }
      }
    },
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  });
  Menu.associate = function (models) {
    Menu.belongsTo(models.Restaurant, {
      foreignKey: 'restaurantId'
    })
  }
  return Menu;
};