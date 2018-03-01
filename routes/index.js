const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('BERHASIL MASUK ROUTE INDEX')
})

module.exports = router;