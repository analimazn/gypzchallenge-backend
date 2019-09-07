const Order = require('../models/Order')
const orderIsValid = require('../validation/order')
const utils = require('../utils/order')

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
      const validation = await orderIsValid.validate(req.body.data)
      if (validation !== null) {
        const json = await utils.formatJson(req)
        const order = new Order(json)
        const result = await order.save()
        return result
      } else {
        throw validation
      }
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
