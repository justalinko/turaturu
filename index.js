/** 
* Basically i dont know why to make this project //
* I just get bored right now and for fill the free time.
***************************************************  
* For now, my condition no money and have a lot of problems.
* I just wanna look back before i was get my own goals,
***************************************************
* I learned code or programming since 2014 when I still in school.
* First language i write is HTML , you know HTML is not programming.
* Until the end, Im forced to learn PHP cause of condition.
* Fun fact , I learned PHP for 4 month 
* and at the moment i was making my own CMS ( Content Management System )
* I write the code with NATIVE PHP , without OOP or MVC
* Basically, I'm is PHP programmer , I learned PHP too longg till now....
****************************************************
* If you know i just learned JavaScript ( NodeJS ) recently.
* Just a few day ago.
* 
* So, Please to understand I'm still in the learning stage.
* And sorry for my bad english.
**/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRoute = require('./routes/about');
var quoteRoute = require('./routes/quote');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/quote',quoteRoute);
app.use('/about',aboutRoute);
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
  res.render('error');
});

module.exports = app;
