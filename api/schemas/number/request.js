'use strict'

const Joi = require('joi')

const number = require('./data')

const create = Joi.object().keys(number)

const update = Joi.object().keys({
  ...number,
  id: Joi.string().required()
})

const remove = Joi.object().keys({
  id: Joi.string().required()
})

module.exports = {
  create,
  update,
  remove
}
