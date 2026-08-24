'use strict';

require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Backend Server Running!');
});

function start(port = PORT) {
  return app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

if (require.main === module) {
  start();
}

module.exports = {
  start,
  server: app,
};
