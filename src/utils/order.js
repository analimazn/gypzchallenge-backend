const moment = require('moment')

module.exports = {
  generateScore() {
    try {
      return Math.floor(Math.random() * (999 - 1 + 1)) + 1
    } catch (err) {
      throw err
    }
  },
  calculateCreditLimit(num, amount) {
    try {
      return num * amount / 100;
    } catch (err) {
      throw err
    }
  },
  async approveCreditCard(score, amount) {
    try {
      let result
      let limit
  
      if (score <= 299) {
        return { approved: false, creditLimit: 0 }
      } else if (score >= 300 && score <= 599) {
        return { approved: true, creditLimit: 1000 }
      } else if (score >= 600 && score <= 799) {
        result = await this.calculateCreditLimit(50, amount)  
        limit = result <= 1000 ? 1000 : result
        return { approved: true, creditLimit: limit }
      } else if (score >= 800 && score <= 950) {
        result = await this.calculateCreditLimit(200, amount)
        limit = result <= 1000 ? 1000 : result
        return { approved: true, creditLimit: limit }
      } else {
        return { approved: true, creditLimit: 1000000 }
      }
    } catch (err) {
      throw err
    }
  },
  async formatJson(req) {
    try {
      const date = moment.utc(`${req.body.data.bornDate}`, "YYYY/MM/DD")
      const score = await this.generateScore()
      const amount = parseInt(req.body.data.amount)
      const creditCard = await this.approveCreditCard(score, amount)

      const order = {
        user: {
          firstName: req.body.data.firstName,
          lastName: req.body.data.lastName,
          document: req.body.data.document,
          bornDate: date,
        },
        contact: {
          cellphoneNumber: req.body.data.cellphoneNumber
        },
        address: {
          country: req.body.data.country,
          df: req.body.data.df,
          county: req.body.data.county,
          postCode: req.body.data.postCode,
          neighborhood: req.body.data.neighborhood,
          street: req.body.data.street,
          houseNumber: req.body.data.houseNumber,
          moreInfo: req.body.data.moreInfo,
        },
        creditCardInfo: {
          amount: amount,
          approved: creditCard.approved,
          creditLimit: creditCard.creditLimit
        },
        createdAt: new Date()
      }
      return order

    } catch (err) {
      throw err
    }
  }
}
