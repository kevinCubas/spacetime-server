import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { auth } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'roeofdposdfp-_0+[2$%j/*+.redgr65476rtrg',
})

app.register(memoriesRoutes)
app.register(auth)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server listening on port 3333')
  })
