var express = require('express');
var router = express.Router();
const appointment1= require('../controller/appointment-control');
// var usersRouter = require('./routes/users');


router.get('/', function(req, res, next) {
  res.render('appointment-cas', { title: 'Express' });
});



// usersRouter.post('/',function(req,res){
// app.route('/user').post(function(req,res){
//   const newAppointment = new appointment1({
//     date:req.body.dateconfirm,
//     service:req.body.select1,
//     therapist:req.body.selecttherapist
//
//
//   });

//   newAppointment.save(function(err){
//     if (!err){
//       res.send("successfully added an appointment");
//     }else {
//       res.send(err);
//     }
//   });
//   console.log(date);
//   console.log(service);
//   console.log(therapist);
//
// });

module.exports = router;
