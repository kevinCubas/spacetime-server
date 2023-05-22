import { randomUUID } from 'node:crypto'
import { FastifyInstance } from 'fastify'
import { extname, resolve } from 'node:path'
import { createWriteStream } from 'node:fs'
import { promisify } from 'node:util'
import { pipeline } from 'node:stream'

const pump = promisify(pipeline)

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request, reply) => {
    const upload = await request.file({
      limits: {
        fileSize: 5_242_880, // 5mb
      },
    })

    if (!upload) {
      return reply.status(400).send({
        message: 'No file uploaded',
      })
    }

    const mimeTypeRegex = /^(video|image)\/[a-zA-Z/]+/
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

    if (!isValidFileFormat) {
      return reply.status(400).send({
        message: 'Invalid file format',
      })
    }

    const fileId = randomUUID() // generate random uuid
    const extension = extname(upload.filename) // get the file actual name

    const fileName = fileId.concat(extension) // change the file name concatenated with uuid

    const writeStream = createWriteStream(
      resolve(__dirname, '../../uploads', fileName), // stream the file
    )

    await pump(upload.file, writeStream)

    const fullUrl = request.protocol.concat('://').concat(request.hostname)
    const fileUrl = new URL(`uploads/${fileName}`, fullUrl).toString()

    return reply.status(201).send({
      fileUrl,
    })
  })
}
