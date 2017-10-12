var express = require('express');
var router = express.Router();
var controller = require('../controller/transactionController')

var jwt =  require('jsonwebtoken')

var helper = require('../helper/helper')

const auth = (req, res, next) =>
{
  // console.log(req.headers.token);
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, process.env.SECRETKEY);
    if(decoded.role == 'user')
    {
      req.headers.authentic = decoded
      console.log('AUTHENTIC ', req.headers.authentic);
      next()
    }
    else {
      res.send('maaf anda belum terdaftar')
    }
  }
  else {
    res.send('you should login')
  }
  // console.log("DECODED: ",decoded)
}

router.get('/read',auth, controller.read)
router.post('/create', auth, controller.create)
router.delete('/delete/:id', auth, controller.deleteTransaction)
router.post('/checkout/:id', auth, controller.checkout)

module.exports = router
