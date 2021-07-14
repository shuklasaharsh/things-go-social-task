// NPM Imports
const express = require('express')
// File imports
// Data
require('../db/mongoose')
// Routers
const userRouter = require('../routers/user')

// Middleware


const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(userRouter)


module.exports = app