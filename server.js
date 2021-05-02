'use strict';

const express = require('express');
const errorHandler = require('./handlers/500.js');
const notFoundHandler = require('./handlers/404.js');

const app = express();

// Routes 

app.get('/', (req, res) => {
  res.status(200).send('Hello From server home route');
});


app.get('/info', (req, res) => {
  res.status(200).json({
    name: 'Qais',
    age: 24
  });
});


app.get('/bad-request', (req, res) => {
  throw new Error('manual error');
});





// Handlers ==> Middleware
app.use('*', notFoundHandler);
app.use(errorHandler);


// listening to port
function start(port) {
  app.listen(port, () => console.log(`Listening to PORT ${port}`));
}

// exports to another file
module.exports = {
  app: app,
  start: start
};


