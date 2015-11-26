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

CartSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

CartSchema.options.toObject = CartSchema.options.toObject || {};
CartSchema.options.toObject.transform = function (doc, ret, options) {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
};

module.export = mongoose.model('Cart', CartSchema);
