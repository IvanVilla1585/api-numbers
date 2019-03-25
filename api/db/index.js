'use strict'

const mongoose = require('mongoose')

const config = require('../config')

let connection

function setUpDB () {
  try {
    if (!connection) {
      connection = mongoose.createConnection(config.db, { useNewUrlParser: true })
      console.log('MongoDb success connection')
    }
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
  return connection
}

module.exports = setUpDB
