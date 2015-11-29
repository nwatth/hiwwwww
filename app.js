"use strict";

// ============================================================== //
//                         DEPENDENCIES                           //
// ============================================================== //

var express    = require('express');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var register   = require('./configs/register');
var routes     = require('./configs/routes');
var middleware = require('./configs/middleware');

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

app.use(middleware);
app.use(routes);

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
