'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const {PORT, CLIENT_ORIGIN} = require('./config');
const {dbConnect} = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

//unprotected; ** Step 1 **
app.post('/signup', (req, res) => {
  //user registers
});

//unprotected; go here to request a JSON web token with a valid username and password
app.post('/login', (req, res) => {

});

//protected; go here to request a new JWT; valid JWT required
app.post('/refresh', (req, res) => {

});

//unprotected
app.get('/', (req, res) => {
  //homepage with a signup and login link
});

//protected endpoint; valid JSON web token required
app.get('/dashboard', (req, res) => {

});



function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = {app};
