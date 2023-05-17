import { FastifyInstance } from 'fastify'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {})

  app.get('/memories/:id', async () => {})

  app.post('/memories/', async () => {})

  app.put('/memories/:id', async () => {})
}
