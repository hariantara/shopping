var mongoose = require('mongoose');

var Schema = mongoose.Schema

var Transactions = new Schema({
  stuffdata: {
    type: Schema.Types.ObjectId,
    ref: 'Stuff'
  },
  userdata: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  image: String,
  description: String,
  category: String,
  quantity: Number,
  price: Number,
  total: Number,
  createdAt: Date,
  updatedAt: Date
})

var Transactions = mongoose.model('Transactions', Transactions)

module.exports = Transactions
