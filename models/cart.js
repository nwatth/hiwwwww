var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var CartSchema = new Schema({
  name: String,
  state: {
    type: String,
    match: /(draft|request|search|paid|done|archive)/,
    default: 'draft'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.export = mongoose.model('Cart', CartSchema);
