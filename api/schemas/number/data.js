'use strict'

const Joi = require('joi')

const number = {
  value: Joi.number().required(),
  number: Joi.number().required(),
  length: Joi.number().required()
}

module.exports = number
