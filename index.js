const express = require('express');
const app = express();
__path = process.cwd();
const bodyParser = require("body-parser");
let code = require('./pair');
require('events').EventEmitter.defaultMaxListeners = 500;

app.use('/code', code);

app.use('/', async (req, res, next) => {
  res.sendFile(__path + '/pair.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = (req, res) => {
  app(req, res);
};
