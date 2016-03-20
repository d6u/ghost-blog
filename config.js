'use strict';

require('dotenv').config({path: '/etc/secret-volume/env-file'});

const path = require('path');
const config = require('config');

const server = {
  host: '0.0.0.0',
  port: '2368',
};

const paths = {
  contentPath: path.join(__dirname, '/content'),
};

const database = {
  client: 'pg',
  connection: {
    host: config.get('database.connection.host'),
    user: config.get('database.connection.user'),
    password: config.get('database.connection.password'),
    database: config.get('database.connection.database'),
    charset: 'utf8'
  },
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
    url: 'http://blog.daiwei.lu',
    server,
    paths,
    database,
    mail,
  },
};
