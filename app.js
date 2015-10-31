"use strict";

// ============================================================== //
//                         DEPENDENCIES                           //
// ============================================================== //

var express    = require('express');
var Resource   = require('express-resource');
var logger     = require('morgan');
var bodyParser = require('body-parser');

// register models
var Cart = require('./models/cart');

// register controllers
var CartController = require('./controllers/cartController');

// ============================================================== //
//                         APP CONFIGURE                          //
// ============================================================== //

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ============================================================== //
//                            ROUTES                              //
// ============================================================== //

app.resource('carts', new CartController());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ============================================================== //
//                        ERROR HANDLERS                          //
// ============================================================== //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
      message: err.message,
      error: err
    });
    return;
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
  return;
});


module.exports = app;
