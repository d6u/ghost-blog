'use strict';

const path = require('path');
const config = require('config');

const server = {
  host: '0.0.0.0',
  port: config.get('server.port'),
};

const paths = {
  contentPath: path.join(__dirname, '/content'),
};

const database = {
  client: 'pg',
  connection: config.get('database.connection'),
  debug: false,
};

const mail = {
  transport: 'SMTP',
  options: {
    service: 'Mailgun',
    auth: {
      user: config.get('mailgun.user'),
      pass: config.get('mailgun.pass'),
    }
  }
};

module.exports = {
  development: {
    url: 'http://192.168.99.100:2368',
    server,
    paths,
    database,
    mail,
  },
  production: {
    url: 'http://blog-daiwei-lu.herokuapp.com',
    // url: 'http://blog.daiwei.lu',
    server,
    paths,
    database,
    mail,
  },
};
