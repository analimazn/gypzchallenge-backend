const routes = require('express').Router()
const controller = require('./controller/order')

routes.get('/', async (req, res) => {
  const result = await controller.index()
  if (result.status !== 200) {
    return res.status(result.status).json(result.message)
  }
  return res.json(result)
})

routes.get('/order', async (req, res) => {
  const result = await controller.find()
  if (result.status !== 200) {
    return res.status(result.status).json(result.message)
  }
  return res.json(result)
})

routes.post('/order', async (req, res) => {
  const result = await controller.create(req)
  if (result.status !== 200) {
    return res.status(result.status).json(result.message)
  }
  return res.json(result)
})

routes.delete('/order', async (req, res) => {
  const result = await controller.remove(req)
  if (result.status !== 200) {
    return res.status(result.status).json(result.message)
  }
  return res.json(result)
})

module.exports = routes