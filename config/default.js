'use strict';

module.exports = {
  server: {
    port: process.env.PORT,
  },
  mailgun: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS,
  },
  database: {
    connection: process.env.DATABASE_URL,
  },
};
