const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');

// Set static and JSON parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve pair.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pair.html'));
});

// Define other routes
app.use('/code', require('./pair'));

// Export as a Vercel-compatible handler
module.exports = app;
