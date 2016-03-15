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

    // #### Database
    // Ghost supports sqlite3 (default), MySQL & PostgreSQL
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-dev.db')
      },
      debug: false
    },
    // #### Server
    // Can be host & port (default), or socket
    server: {
      // Host to be passed to node's `net.Server#listen()`
      host: '127.0.0.1',
      // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
      port: '2368'
    },
    // #### Paths
    // Specify where your content directory lives
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  },

  production: {
    url: 'http://my-ghost-blog.com',
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
