const express = require('express')
const homeRoute = require('./routes/home')
const app = express()

const axios = require('axios')

require('dotenv').config({ path: './config/.env' })

app.set('view engine', 'ejs')

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'));

app.use('/', homeRoute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server up and running at port ${PORT}`)
})