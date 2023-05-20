import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import staticFastify from '@fastify/static'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'path'

const app = fastify()

app.register(multipart)

app.register(staticFastify, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})
app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'roeofdposdfp-_0+[2$%j/*+.redgr65476rtrg',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server listening on port 3333')
  })
