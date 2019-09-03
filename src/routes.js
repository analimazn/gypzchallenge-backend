const routes = require('express').Router()
const controller = require('./controller/order')

routes.get('/order', async (req, res) => {
  const result = await controller.find()
  return res.json(result)
})

routes.post('/order', async (req, res) => {
  const result = await controller.create(req)
  return res.json(result)
})

routes.delete('/order', async (req, res) => {
  const result = await controller.remove(req)
  return res.json(result)
})

module.exports = routes