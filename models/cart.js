"use strict";

var database = require('../configs/database');
var Schema   = require('./base');

var states = ['draft', 'open', 'finder', 'checkout', 'closed'];

var CartSchema = new Schema({
  name: String,
  state: {
    type: String,
    match: new RegExp('^(' + states.join('|') + ')$'),
    default: states[0]
  }
});

CartSchema.methods.nextState = function () {
  var state   = this.state;
  var current = states.indexOf(state);
  var next    = current + 1;

  if (~current && !!states[next]) {
    this.state = states[next];
    this.save();
    return this.state;
  };
};

module.exports = database.model('Cart', CartSchema);
