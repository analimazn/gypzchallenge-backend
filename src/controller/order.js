const Boom = require('@hapi/boom')
const services = require('../services/order')

module.exports = {
  async index() {
    try {
      const data = await services.index()
      return {
        message: 'Connection successfully',
        data: data
      }
    } catch (err) {
      return Boom.badImplementation(
        { message: 'Error to connect', data: err }
      )
    }
  },
  async find(req) {
    try {
      const data = await services.find() 
      return { 
        message: 'All found successfully',
        data: data
      }
    } catch (err) {
      return Boom.badImplementation(
        { message: 'Error to find all', data: err }
      )
    }
  },
  async create(req) {
    try {
      const data = await services.create(req)
      return {
        message: 'Created successfully',
        data: data
      }
    } catch (err) {
      return Boom.badImplementation(
        { message: 'Error to create', data: err }
      )
    }
  },
  async findOne(req) {
    try {
      const data = await services.findOne(req)
      return {
        message: 'Found successfully',
        data: data
      }
    } catch (err) {
      return Boom.badImplementation(
        { message: 'Error to find one', data: err }
      )
    }
  },
  async remove(req) {
    try {
      const data = await services.remove(req)
      return {
        message: 'Removed successfully',
        data: data
      }
    } catch (err) {
      return Boom.badImplementation(
        { message: 'Error to remove', data: err }
      )
    }
  }
}
