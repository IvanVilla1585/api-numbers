'use strict'

const mongoose = require('mongoose');

const config = require('../config');
const numberSchema = require('../routes/number/model');

const mongo = {
  models: {},
  async setUpDB() {
    const connection = await mongoose.createConnection(config.db);
    if (connection.errors) throw new Error('Error al conectarse a la base de datos');
    this.models.number = await connection.model('number', numberSchema);
  },
  getModel(key) {
    return this.models[key];
  }
};

module.exports = mongo;