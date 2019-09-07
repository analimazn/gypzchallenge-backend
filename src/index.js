require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
  app.use(cors({origin: '*'}))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.disable('etag');
  app.use(morgan('dev'))
  
  app.use(routes)
  app.listen(3000)
})

mongoose.connection.on('error', (err) => {
  process.exit(1)
})
