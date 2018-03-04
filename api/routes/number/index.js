'use strict'

const mongo = require('../../db/mongo');

class NumberRoutes {
  constructor(app = null) {
    if (!app) throw new Error('El router no puede ser null');
    this.app = app;
    this.setUpRoutes();
  }

  setUpRoutes() {
    this.app.get('/number', async (req, res) => {
      const Model = mongo.getModel('number');
      const results = await Model.find();
      res.send(results)
    });

    this.app.post('/number', async (req, res) => {
      const Model = mongo.getModel('number');
      const data = req.body;
      console.log('data', data)
      const result = await new Model(data).save();
      res.send(result);
    });
  }
}

module.exports = NumberRoutes;