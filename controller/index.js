"use strict"
const MenuController = require('./MenuController.js')
// const ControllerB = require('./ControllerB.js')
// const ControllerC = require('./ControllerC.js')

class Controller {

  static home(req, res){
    // res.send('homepage')
    res.render('home.ejs', {
      title: 'Homepage',
      header: 'Welcome livecode 4'
    })
  }

}

module.exports = {
  Controller: Controller,
  MenuController: MenuController
  // ControllerB: ControllerB,
  // ControllerC:ControllerC
};
