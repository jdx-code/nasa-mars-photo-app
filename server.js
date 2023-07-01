const express = require('express')

const app = express()

require('dotenv').config({ path: './config/.env' })

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server up and running at port ${PORT}`)
})