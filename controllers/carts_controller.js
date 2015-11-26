var mongoose = require('mongoose'),
    Cart     = mongoose.model('Cart');

function CartController() {};

CartController.prototype.index = function (req, res) {
  Cart.find({}, function (error, carts) {
    res.json(Object.keys(carts).map(function (key) {
      return carts[key].toObject();
    }));
  });
};

CartController.prototype.show = function (req, res) {
  Cart.findById(req.params.cart, function (error, cart) {
    res.json(cart.toObject());
  });
};

CartController.prototype.create = function (req, res) {
  Cart.create(req.body, function(error, data) {
    res.json({success: true});
  });
};

CartController.prototype.update = function (req, res) {
  Cart.findByIdAndUpdate(req.params.cart, req.body, function (error) {
    res.json({success: true});
  });
};

CartController.prototype.destroy = function (req, res) {
  Cart.findByIdAndRemove(req.params.cart, function (error) {
    res.json({success: true});
  });
};

module.exports = CartController;
