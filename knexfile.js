module.exports = {
    test: {
      client: 'mysql',
      connection: {
            host     : 'localhost',
            user     : 'root',
            password : '',
            database: 'zelda_walkthroughs',
            insecureAuth: true,
            charset : 'utf8mb4'
        },
      migrations: {
        directory: __dirname + '/app/db/migrations'
      },
      seeds: {
        directory: __dirname + '/app/db/seeds'
      }
    },
    development: {
      client: 'mysql',
      connection: {
            host     : 'localhost',
            user     : 'root',
            password : '',
            database: 'zelda_walkthroughs',
            insecureAuth: true,
            charset : 'utf8mb4'
        },
      migrations: {
        directory: __dirname + '/app/db/migrations'
      },
      seeds: {
        directory: __dirname + '/app/db/seeds'
      }
    },
    production: {
      client: 'mysql',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: __dirname + '/app/db/migrations'
      },
      seeds: {
        directory: __dirname + '/app/db/seeds'
      }
    }
  };
