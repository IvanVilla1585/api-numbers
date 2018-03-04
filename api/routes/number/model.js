'use strict'

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  number: {
    type: Number,
    required: 'El numero es obligatorio'
  },
  value: {
    type: Number,
    required: 'El valor es obligatorio'
  },
  calculated: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

if (!schema.options.toJSON) {
  schema.options.toJSON = {};
}

/**
 * Add a tranforma method to change _id by id
 * whent toJSON is used.
 */
schema.options.toJSON.transform = (doc, ret) => {
  // Remove the _id of every document before returning the result
  ret.id = ret._id; // eslint-disable-line no-param-reassign
  delete ret._id; // eslint-disable-line no-param-reassign
  return ret;
};

module.exports = schema;