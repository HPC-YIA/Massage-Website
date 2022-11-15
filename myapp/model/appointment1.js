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
