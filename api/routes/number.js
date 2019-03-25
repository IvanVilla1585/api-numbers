'use strict'

const { joiValidateData } = require('../utils')
const schemas = require('../schemas/number/request')
const numberController = require('../controllers/number')

function configNumberRoutes (router) {
  router
    .get('/numbers', numberController.get)

  router
    .post('/numbers', joiValidateData(schemas.create), numberController.create)
}

module.exports = configNumberRoutes
