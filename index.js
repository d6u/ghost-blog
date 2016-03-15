'use strict';

const join = require('path').join;
const ghost = require('ghost');

ghost({config: join(__dirname, 'config.js')})
  .then((ghostServer) => {
    ghostServer.start();
  });
