/** @type {import('knex').Knex.Config} */
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/app.db',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
      extension: 'ts',
    },
  },
}