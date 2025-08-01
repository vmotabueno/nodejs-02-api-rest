import fastify from 'fastify'
import dotenv from 'dotenv'
import { knex } from './database'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

dotenv.config()

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: '/transactions',
})

app.get('/tables', async () => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

app
  .listen({
    port: Number(process.env.PORT) || 3333,
  })
  .then(() => {
    console.log(`HTTP Server Running on port ${process.env.PORT || 3333}`)
  })
