import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

// Rota que consulta transactions com amount = 1000
app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')
  return transactions
})

// Rota para listar as tabelas existentes no banco (útil para debug)
app.get('/tables', async () => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
