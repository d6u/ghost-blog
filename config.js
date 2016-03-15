const path = require('path');

module.exports = {
  development: {
    url: 'http://localhost:2368',

    // Example mail config
    // Visit http://support.ghost.org/mail for instructions
    // ```
    //  mail: {
    //      transport: 'SMTP',
    //      options: {
    //          service: 'Mailgun',
    //          auth: {
    //              user: '', // mailgun username
    //              pass: ''  // mailgun password
    //          }
    //      }
    //  },
    // ```

    database: {
      client: 'pg',
      connection: {
        host: process.env.DATABASE_PORT_5432_TCP_ADDR,
        user: process.env.DATABASE_ENV_POSTGRES_USER,
        password: process.env.DATABASE_ENV_POSTGRES_PASSWORD,
        database: process.env.DATABASE_ENV_POSTGRES_DB,
        charset: 'utf8'
      },
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: '2368'
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  },

  production: {
    url: 'http://blog.daiwei.lu',
    mail: {},
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost.db')
      },
      debug: false
    },

    server: {
      host: '127.0.0.1',
      port: '2368'
    }
  },
};
