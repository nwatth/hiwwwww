var mongoose = require('mongoose'),
    Cart     = mongoose.model('Cart'),
    cart     = new Cart();

function CartController() {};

CartController.prototype.index = function (req, res) {
  console.log(cart);
  res.send("Hola!");
};

CartController.prototype.new = function (req, res) {
  res.send('this is cart');
};

CartController.prototype.create = function (req, res) {
  res.send('this is cart');
};

CartController.prototype.show = function (req, res) {
  res.send('this is cart');
};

CartController.prototype.edit = function (req, res) {
  res.send('this is cart');
};

CartController.prototype.update = function (req, res) {
  res.send('this is cart');
};

CartController.prototype.destroy = function (req, res) {
  res.send('this is cart');
};

module.exports = CartController
