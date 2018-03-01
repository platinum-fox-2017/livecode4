const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('We are in');
});
module.exports = router;