var Cart = require('../models/cart');

function CartController() {};

CartController.index = function (req, res) {
  Cart.find({}, function (error, carts) {
    res.json(Object.keys(carts).map(function (key) {
      return carts[key].toObject();
    }));
  });
};

CartController.show = function (req, res) {
  res.json(req.cart);
};

CartController.create = function (req, res) {
  Cart.create(req.body, function(error, data) {
    res.json({success: true});
  });
};

CartController.update = function (req, res) {
  Cart.findByIdAndUpdate(req.params.cart, req.body, function (error) {
    res.json({success: true});
  });
};

CartController.destroy = function (req, res) {
  Cart.findByIdAndRemove(req.params.cart, function (error) {
    res.json({success: true});
  });
};

module.exports = CartController;
