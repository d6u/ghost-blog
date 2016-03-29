'use strict';

module.exports = {
  server: {
    port: 2368,
  },
  mailgun: {
    user: null,
    pass: null,
  },
  database: {
    connection: {
      host: process.env.DATABASE_PORT_5432_TCP_ADDR,
      user: process.env.DATABASE_ENV_POSTGRES_USER,
      password: process.env.DATABASE_ENV_POSTGRES_PASSWORD,
      database: process.env.DATABASE_ENV_POSTGRES_DB,
    },
  },
};
