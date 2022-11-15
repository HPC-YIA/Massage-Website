const express =require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://HPC-YIA:HPC501@cluster0.trqdshd.mongodb.net/mProject", {
  useNewUrlParser: true
}, function(err) {
  if (err) {
    console.log(err);

  } else {
    console.log("successfully.")
  }

});



const app = express();





// //listen/ connect  to port 3000
// app.listen(3000, function() {
//   console.log("server connected to port 3000");
//
//
// });
