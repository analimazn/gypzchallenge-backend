const Boom = require('@hapi/boom')

module.exports = {
  async find(req) {
    try {
      return { message: 'All found successfully', status: 200 }
    } catch (err) {
      return Boom.badImplementation(
        { message: 'Error to find all', data: err }
      )
    }
  },
  async create(req) {
    try {
      return { message: 'Created successfully', status: 200 }
    } catch (err) {
      return Boom.badImplementation(
        { message: 'Error to create', data: err }
      )
    }
  },
  async findOne(req) {
    try {
      return { message: 'Found successfully', status: 200 }
    } catch (err) {
      return Boom.badImplementation(
        { message: 'Error to find one', data: err }
      )
    }
  },
  async remove(req) {
    try {
      return { message: 'Removed successfully', status: 200 }
    } catch (err) {
      return Boom.badImplementation(
        { message: 'Error to remove', data: err }
      )
    }
  }
}
