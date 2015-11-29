var database = require('../configs/database');
var util     = require('util');
var Schema   = database.Schema;

var BaseSchema = function () {
  Schema.apply(this, arguments);

  this.add({
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  });

  this.options.toObject = this.options.toObject || {};
  this.options.toObject.transform = function (self, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  };

};

util.inherits(BaseSchema, Schema);

module.exports = BaseSchema;
