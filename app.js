const express       = require('express')
const app           = express()
const bodyParser    = require('body-parser')
const routes        = require('./routes')
const PORT          = 3000


app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'ejs')

app.use('/', routes)
app.locals.helper = require('./helpers')

app.listen(PORT,() => {
    console.log("Apps run on port " + PORT);
})