const express = require('express')
const app = express()
const PORT = 3000

const bodyParser = require('body-parser')

const index = require('./routes/index')
const menus = require('./routes/menus')

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.use('/', index)
app.use('/menus', menus)

//Testing
// app.get('/', (req, res) => {
//   res.status(200).json({message: 'Connected!'})
// })

// Server
app.listen(PORT, () => {
  console.log(`connected to PORT ${PORT}`)
})