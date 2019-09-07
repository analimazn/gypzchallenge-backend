const Joi = require('@hapi/joi')

module.exports = {
  async validate(order) {
    const schema = Joi.object().keys({
      firstName: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .uppercase(),
      lastName: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .uppercase(),
      document: Joi.number()
        .positive(),
      bornDate: Joi.date(),
      cellphoneNumber: Joi.number()
        .positive(),
      country: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .uppercase(),
      df: Joi.string()
        .min(2)
        .max(30)
        .trim()
        .uppercase(),
      county: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .uppercase(),
      postCode: Joi.number()
        .positive(),
      neighborhood: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .uppercase(),
      street: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .uppercase(),
      houseNumber: Joi.number()
        .positive(),
      moreInfo: Joi.string()
        .allow('')
        .optional(),
      amount: Joi.number()
        .positive()
        .min(100)
    })
    const result = await Joi.validate(order, schema)
    return result
  }
} 
