const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs')

app.use('/', require('./routes'))


app.listen(port, ()=>{
    console.log(`App is listening on PORT #${port}`);
})
