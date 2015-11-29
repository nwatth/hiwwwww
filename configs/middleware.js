var express  = require('express');
var router   = express.Router();

var Cart     = require('../models/cart');

router.use('/carts/:id', function (req, res, next) {
  Cart.findById(req.params.id, function (err, cart) {
    req.cart = cart.toObject();
    next();
  });
});

module.exports = router;
