const express = require('express')
const router = express.Router()
const format_currency = require('../helpers/format_currency')
const Model = require('../models')

router.get('/',(req, res)=> {
    res.render('index')
})

module.exports = router