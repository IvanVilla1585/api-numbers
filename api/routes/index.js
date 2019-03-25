const express = require('express')

const configNumberRoutes = require('./number')

const router = express.Router()

configNumberRoutes(router)

module.exports = router
