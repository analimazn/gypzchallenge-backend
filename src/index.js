require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

const routes = require('./routes')

app.use(routes)
app.listen(3000)