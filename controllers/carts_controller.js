var mongoose = require('mongoose'),
    Cart     = mongoose.model('Cart');

function CartController() {};

CartController.prototype.index = function (req, res) {
  Cart.find({}, function (error, data) {
    var carts = data.reduce(function (carts, item) {
      carts[item.id] = item;
      return carts;
    }, {});
    res.json(carts);
  });
};

CartController.prototype.show = function (req, res) {
  Cart.findById(req.params.cart, function (error, cart) {
    res.json(cart);
  });
};

CartController.prototype.create = function (req, res) {
  var cart = new Cart(req.body);
  cart.save(function(error, data) {
    res.json({success: true});
  });
};

CartController.prototype.update = function (req, res) {
};

CartController.prototype.destroy = function (req, res) {
};

module.exports = CartController;
