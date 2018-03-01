const express = require('express')
const app = express()
const port = 3000
const menus = require('./routes/menu')

app.locals.helper = require('./helpers/formatcurrency.js')

app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/menus', menus)

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
})