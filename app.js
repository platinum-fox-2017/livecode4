'use strict'

const express = require('express');

const app = express();
const PORT = 3000;

app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Aplikasi live-coding4 ini berjalan di port: ${PORT}`)
})

