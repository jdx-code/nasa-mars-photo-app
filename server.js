const express = require('express')
const homeRoute = require('./routes/home')
const app = express()

require('dotenv').config({ path: './config/.env' })

app.set('view engine', 'ejs')

app.use('/', homeRoute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server up and running at port ${PORT}`)
})