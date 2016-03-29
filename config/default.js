'use strict';

module.exports = {
  mailgun: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS,
  },
  database: {
    connection: process.env.DATABASE_URL,
  },
};
