"use strict";

// ============================================================== //
//                         DEPENDENCIES                           //
// ============================================================== //

var express    = require('express');
var Resource   = require('express-resource');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

mongoose.connect('mongodb://localhost/test');

// register models
var Cart = require('./models/cart') && mongoose.model('Cart');

// register controllers
var CartController = require('./controllers/carts_controller');

// ============================================================== //
//                         APP CONFIGURE                          //
// ============================================================== //

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.disable('etag');

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

app.use(function(err, req, res, next) {
  res
    .status(err.status || 500)
    .send({
      message: err.message,
      error: err
    });
  return;
});


module.exports = app;
