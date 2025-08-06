import { expect, test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../app' // corrigido

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('o usuário consegue criar uma nova transação', async () => {
  const response = await request(app.server).post('/transactions').send({
    title: 'New Transaction',
    amount: 1000,
    type: 'credit',
  })

  expect(response.statusCode).toEqual(201)
})
