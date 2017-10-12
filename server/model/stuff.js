var mongoose = require('mongoose');
// mongoose.connect('mongodb://blacksmith:1Hari@blacksmith-shard-00-00-p4h2m.mongodb.net:27017,blacksmith-shard-00-01-p4h2m.mongodb.net:27017,blacksmith-shard-00-02-p4h2m.mongodb.net:27017/blacksmith?ssl=true&replicaSet=Blacksmith-shard-0&authSource=admin');

var Schema = mongoose.Schema;

var StuffSchema = new Schema({
  userdata: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  image: String,
  description: String,
  category: String,
  stock: Number,
  price: String,
  createdAt: Date,
  updatedAt: Date
})

var stuffModels = mongoose.model('Stuff', StuffSchema)

module.exports = stuffModels
