const Router = require('express').Router()

const Models = require('../models')
const Restaurant = Models.Restaurant
const Menu = Models.Menu

Router.get('/',(req,res)=>{
    res.render('home')
})

module.exports = Router