var Cart = require('../models/cart');

var CartController = {};

CartController.index = function (req, res) {
  Cart.find({'deleted_at': null}, function (error, carts) {
    var carts = carts.map(function (cart) {
      return cart.toObject();
    });
    res.json(carts);
  });
};

CartController.show = function (req, res) {
  Cart.findOne({'_id': req.params.id, 'deleted_at': null}, function (err, cart) {
    try {
      if (err) throw err;
      res.json(cart.toObject());
    } catch(err) {
      res.json({});
    };
  });
};

CartController.create = function (req, res) {
  var cart = new Cart();
  var now  = Date.now();
  cart.prepare('name', req.body, 'My cart');
  cart.created_at = now;
  cart.updated_at = now;
  cart.save(function (err) {
    res.json({success: !err});
  });
};

CartController.update = function (req, res) {
  Cart.findOne({'_id': req.params.id}, function (err, cart) {
    cart.prepare('name', req.body);
    cart.prepare('state', req.body);
    cart.updated_at = Date.now();
    cart.save(function (err) {
      res.json({success: !err});
    });
  });
};

CartController.destroy = function (req, res) {
  Cart.findOne({'_id': req.params.id}, function (err, cart) {
    cart.deleted_at = Date.now();
    cart.save(function (err) {
      res.json({success: !err});
    });
  });
};

module.exports = CartController;
