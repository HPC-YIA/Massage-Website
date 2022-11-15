//control &server

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const debug = require('debug')('myapp:server');
const mongoose =require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appointmentRouter = require('./routes/appointment-cas');
var accountRouter = require('./routes/myaccount-show-appointment');
var aboutusRouter = require('./routes/aboutUs');
var serviceRouter =require('./routes/service');
var feedbackRouter =require('./routes/feedback');
var app = express();


mongoose.connect("mongodb+srv://HPC-YIA:HPC501@cluster0.trqdshd.mongodb.net/massageProject", {
  useNewUrlParser: true
}, function(err) {
  if (err) {
    console.log(err);

  } else {
    console.log("successfully.")
  }

});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/appointment-cas', appointmentRouter);
app.use('/myaccount-show-appointment', accountRouter);
app.use('/about-us', aboutusRouter);
app.use('/service', serviceRouter);
app.use('/feedback',feedbackRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render('error');
});



var services = [];



// app.post("/users", function(req, res) {
//   let services = req.body.select1;
//   let date = req.body.dateconfirm;
//   let therapist = req.body.selecttherapist;
//   let time = req.body.select2;
//
//   // console.log(service);
//   // console.log(date);
//   // console.log(therapist);
//   // console.log(time);)
//   services.push(service);
//   // res.redirect(usersRouter);
//
// });


// app.get('/users', function(req, res) {
//   res.send('ok');
//
//
// });

//
// //listen/ connect  to port 3000
// app.listen(5000, function() {
//   console.log("server connected to port 5000");
//
//
// });

module.exports = app;
