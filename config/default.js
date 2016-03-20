'use strict';

module.exports = {
  mailgun: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS,
  },
  database: {
    connection: {
      host: process.env.PG_MAIN_SVC_PORT_5432_TCP_ADDR,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: 'ghost-blog',
    },
  },
};
