const Order = require('../models/Order')
const moment = require('moment')

module.exports = {
  async find() {
    try {
      const result = await Order
        .find({})
        .sort({ createdAt: 'asc', firstName: 'asc' })
      return result
    } catch (err) {
      throw err
    }
  },
  async create(req) {
    try {
      const params = req.payload
      const date = moment.utc(`${params.bornDate}`, "DD/MM/YYYY")
      
      const order = await new order({
        firstName: params.title,
        lastName: params.description,
        documentNumber: params.flag,
        bornDate: date,
        postCode: importance,
        houseNumber: houseNumber,
        moreInfo: moreInfo,
        cellphoneNumber: cellphoneNumber,
        phoneNumber: phoneNumber,
        income: income,
        approved: approved,
        creditLimit: creditLimit,:
        createdAt: new Date()
      })
      const result = await order.save()
      return result
    } catch (err) {
      return err
    }
  },
  async findOne(req) {
    try {
      const result = await Order.findOne({
        _id: req.params.id
      })
      return result
    } catch (err) {
      return err
    }
  },
  async remove(req) {
    try {
      const result = await Order
        .findById(req.params.id)
        .deleteOne()
      return result
    } catch (err) {
      return err
    }
  }
}
