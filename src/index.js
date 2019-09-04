require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
  console.log("Connected to MongoDB")
})

mongoose.connection.on('error', (err) => {
  console.log("Error while connecting to MongoDB", err)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(routes)
app.listen(3000)