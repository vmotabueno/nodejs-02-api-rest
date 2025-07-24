import type { Knex } from 'knex'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/database/migrations',
      extension: 'ts',
    },
  },
}

export default config