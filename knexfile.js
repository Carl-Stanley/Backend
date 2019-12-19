module.exports = {
    development: {
      client: 'sqlite3',
      connection: { filename: './data/database/airbnbdata.db3' },
      useNullAsDefault: true,
      migrations: {
        directory: './database/migrations',
        tableName: 'dbmigrations',
      },
      seeds: { directory: './database/seeds' },
    },
  };
  