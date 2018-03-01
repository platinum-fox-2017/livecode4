'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.locals.helpers = require('./helpers');
app.use(express.static('public'));

routes(app);

app.listen(port, () => console.log(`Server listening on port ${port}…`));