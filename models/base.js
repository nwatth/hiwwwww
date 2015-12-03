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
    },
    deleted_at: {
      type: Date,
      default: null
    }
  });

  this.options.toObject = this.options.toObject || {};
  this.options.toObject.transform = function (self, ret, options) {
    delete ret.__v;
    delete ret.deleted_at;
  };

  this.methods.prepare = function (field, request, default_value) {
    this[field] = request[field] || this[field] || default_value || null;
  };

};

util.inherits(BaseSchema, Schema);

module.exports = BaseSchema;
