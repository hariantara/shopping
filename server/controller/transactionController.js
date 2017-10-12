var modelTransactions = require('../model/transaction')

var read = (req, res) => {
  modelTransactions.find()
  .populate({path: 'stuffdata', model: 'Stuff'})
  .populate({path: 'userdata', model: 'User'})
  .then((transactions) => {
    res.send(transactions)
  })
  .catch((err)=>{
    res.send(err)
  })
}

var create = (req, res) => {
  modelTransactions.create({
    userdata: req.headers.authentic,
    stuffdata: req.body.stuffdata,
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price,
    total: req.body.total,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then((data)=>{
    res.send(data)
  })
  .catch((err) =>{
    res.send(err)
  })
}

var checkout = (req, res) => {
  modelTransactions.create({
    userdata: req.headers.authentic,
    stuffdata: req.params.id,
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price,
    total: req.body.quantity * req.body.price,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then((data)=>{
    res.send(data)
  })
  .catch((err) =>{
    res.send(err)
  })
}

var deleteTransaction = (req, res) =>{
  modelTransactions.findByIdAndRemove({
    _id: req.params.id
  })
  .then((transactions) => {
    res.send(transactions)
  })
  .catch((err) => {
    res.send(err)
  })
}

module.exports = {
  create,
  read,
  deleteTransaction,
  checkout
}
