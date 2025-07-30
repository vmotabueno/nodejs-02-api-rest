import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import crypto from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/transactions', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(request.body)

    const transaction = {
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    }

    await knex('transactions').insert(transaction)

    return reply.status(201).send()
  })
}