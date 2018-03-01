const express = require('express');
const app = express();
const router = express.Router();

router.get('/', function(request,response) {
    response.render('./showmenu.ejs')
})


module.exports = router;