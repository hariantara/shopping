var express = require('express');
var router = express.Router();
var controller = require('../controller/stuffController')
// var jwt =  require('jsonwebtoken')
//
// const auth = (req, res, next) =>
// {
//   // console.log(req.headers.token);
//   if(req.headers.hasOwnProperty('token')){
//     var decoded = jwt.verify(req.headers.token, process.env.SECRETKEY);
//     if(decoded.role == 'user')
//     {
//       req.headers.authentic = decoded
//       next()
//     }
//     else {
//       res.send('maaf anda belum terdaftar')
//     }
//   }
//   else {
//     res.send('you should login')
//   }
//   // console.log("DECODED: ",decoded)
// }

router.post('/add', controller.addStuff)
router.get('/read', controller.readStuff)
router.get('/read/:id', controller.findByid)
router.put('/edit/:id', controller.editStuff)
router.delete('/deletestuff/:id', controller.deleteStuff)

module.exports = router
