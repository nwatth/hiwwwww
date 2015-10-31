var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var CartSchema = new Schema({
  name: String,
  state: {
    type: String,
    match: /(wait|buy|paid)/
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

module.export = mongoose.model('Cart', CartSchema);
