"use strict";

var database = require('../configs/database');
var Schema   = require('./base');

var CartSchema = new Schema({
  name: String,
  state: {
    type: String,
    match: /^(draft|request|search|paid|done|archive)$/,
    default: 'draft'
  }
});

module.exports = database.model('Cart', CartSchema);
