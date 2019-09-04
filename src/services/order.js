const Order = require('../models/Order')
const moment = require('moment')
const config = require('../config/order')

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
      const date = moment.utc(`${req.body.bornDate}`, "DD/MM/YYYY")
      const score = await config.generateScore()
      const creditCard = await config.approveCreditCard(score, req.body.amount)
      
      const order = await new Order({
        user: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          documentNumber: req.body.documentNumber,
          bornDate: date,
        },
        contact: {
          cellphoneNumber: req.body.cellphoneNumber,
          phoneNumber: req.body.phoneNumber,
        },
        address: {
          postCode: req.body.postCode,
          houseNumber: req.body.houseNumber,
          moreInfo: req.body.moreInfo,
        },
        creditCardInfo: {
          amount: req.body.amount,
          approved: creditCard.approved,
          creditLimit: creditCard.creditLimit
        },
        createdAt: new Date()
      })
      const result = await order.save()
      return result
    } catch (err) {
      throw err
    }
  },
  async findOne(req) {
    try {
      const result = await Order.findOne({
        _id: req.body._id
      })
      return result
    } catch (err) {
      throw err
    }
  },
  async remove(req) {
    try {
      const result = await Order
        .findById(req.body._id)
        .deleteOne()
      return result
    } catch (err) {
      throw err
    }
  }
}
