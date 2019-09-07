const Boom = require('@hapi/boom')
const services = require('../services/order')

module.exports = {
  async index() {
    try {
      const data = await services.index()
      return {
        message: 'Connection successfully',
        data: data,
        status: 200
      }
    } catch (err) {
      return Boom.badImplementation({ 
        message: 'Error to connect', 
        data: err,
        status: 400
      })
    }
  },
  async find(req) {
    try {
      const data = await services.find() 
      return { 
        message: 'All found successfully',
        data: data,
        status: 200
      }
    } catch (err) {
      return Boom.badImplementation({ 
        message: 'Error to find all', 
        data: err,
        status: 400
      })
    }
  },
  async create(req) {
    try {
      const data = await services.create(req)
      return {
        message: 'Created successfully',
        data: data,
        status: 200
      }
    } catch (err) {
      return Boom.badImplementation({ 
        message: 'Error to create', 
        data: err,
        status: 400
      })
    }
  },
  async findOne(req) {
    try {
      const data = await services.findOne(req)
      return {
        message: 'Found successfully',
        data: data,
        status: 200
      }
    } catch (err) {
      return Boom.badImplementation({
        message: 'Error to find one',
        data: err,
        status: 400
      })
    }
  },
  async remove(req) {
    try {
      const data = await services.remove(req)
      return {
        message: 'Removed successfully',
        data: data,
        status: 200
      }
    } catch (err) {
      return Boom.badImplementation({
        message: 'Error to remove',
        data: err,
        status: 400
      })
    }
  }
}
