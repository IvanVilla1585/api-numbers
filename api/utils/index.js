'use strict'

const Joi = require('joi')

function joiValidateData (schema) {
  return (req, res, next) => {
    const result = Joi.validate({ ...req.body, ...req.query, ...req.params }, schema)
    if (result.error) {
      return res.status(400).json(result.error.details[0].message)
    }
    req.body = result.value
    next()
  }
}

module.exports = {
  joiValidateData
}
