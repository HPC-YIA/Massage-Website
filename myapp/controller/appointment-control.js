


const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const AppoinmentSchema = new mongoose.Schema({
  location: String,
  date: String,
  service: String,
  therapist: String,
  status: String,
  feedback: String,
  rating:{
    type:Number,
    min:1,
    max:10
  }

});

const appointment1=mongoose.model('Appointment1',AppoinmentSchema);
appointment1.findOne(function(err,result){
  if(err){
    console.log(err);
  } else{
    console.log(result);
  }
});
// const appointment = new appointments({
//   location: "Casuarina",
//   date:"2022-11-07",
//   service:'30 mins upper body remedial massage',
//   therapist:'Mary',
//   status:'Completed',
//   feedback:'/',
//   rating:8
//
// });
//
// appointment1.save();

// Appointment1.find();


module.exports = appointment1;

// AppoinmentSchema.methods.post = function()
