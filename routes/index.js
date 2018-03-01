const express = require('express');
const app = express();
const router = express.Router();

router.get('/', function(request,response) {
    response.send(`Welcome to Restaurant Web Page`)
})

router.use('/menus', require('./menus.js'));

module.exports = router;