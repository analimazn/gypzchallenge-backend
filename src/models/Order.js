const mongoose = require("mongoose")
const Schema = mongoose.Schema

const orderSchema = new Schema({
  user: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: false
    },
    document: {
      type: Number,
      required: true
    },
    bornDate: {
      type: Date,
      required: true
    }
  },
  contact: {
    cellphoneNumber: {
      type: Number,
      required: true
    }
  },
  address: {
    country: {
      type: String,
      required: true
    },
    df: {
      type: String,
      required: true
    },
    county: {
      type: String,
      required: false
    },
    postCode: {
      type: Number,
      required: true
    },
    neighborhood: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    houseNumber: {
      type: Number,
      required: true
    },
    moreInfo: {
      type: String,
      required: false
    }
  },
  creditCardInfo: {
    amount: {
      type: Number,
      required: true
    },
    approved: {
      type: Boolean,
      required: true
    },
    creditLimit: {
      type: Number,
      required: true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Order', orderSchema)