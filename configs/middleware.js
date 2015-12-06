"use strict";

var express    = require('express');
var middleware = express.Router();

var Cart     = require('../models/cart');

/* not used now.
middleware.use('/carts/:id?', function (req, res, next) {
  next();
});
*/

module.exports = middleware;
