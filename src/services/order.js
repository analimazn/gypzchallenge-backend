const Order = require('../models/Order')
const moment = require('moment')
const config = require('../config/order')

module.exports = {
  async index() {
    try {
      const result = ''
      return result
    } catch (err) {
      throw err
    }
  },
  async find() {
    try {
      const result = await Order
        .find({})
        .sort({ createdAt: 'desc', firstName: 'asc' })
      return result
    } catch (err) {
      throw err
    }
  },
  async create(req) {
    try {
      const json = await config.formatJson(req)
      const order = new Order(json)
      const result = await order.save()
      return result
    } catch (err) {
      throw err
    }
  },
  async findOne(req) {
    try {
      const result = await Order.findOne({
        _id: req.body.data._id
      })
      return result
    } catch (err) {
      throw err
    }
  },
  async remove(req) {
    try {
      const result = await Order
        .findById(req.query._id)
        .deleteOne()
      return result
    } catch (err) {
      throw err
    }
  }
}
