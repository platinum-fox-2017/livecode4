'use strict'
const router = require('express').Router();

router.get('/', (req,res) => {
    res.send('On developed restaurant')
})

module.exports = router