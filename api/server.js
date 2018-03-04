'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const mongo = require('./db/mongo');
const NumberRoutes = require('./routes/number');

const app = express();

app.use(bodyParser.json());
const port = process.env.PORT || 8000;

mongo.setUpDB();

const numberRoutes = new NumberRoutes(app);
numberRoutes.setUpRoutes();

app.listen(port, () => {console.log(`server running on the port ${port}`)});