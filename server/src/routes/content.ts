/* eslint-disable prettier/prettier */
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'  

export async function contentsroute(app: FastifyInstance) {
  app.get('/contents', async () => {
    const contents = await prisma.content.findMany({
      orderBy:{
        createdAt: 'asc',
      },
      
    })
    return contents.map(contents => {
      return{
        id: contents.id,
        coverUrl: contents.coverUrl,
        title: contents.title.substring(0, 100),
      }
    })
  })


  app.get('/contents/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    })
  
    const { id } = paramsSchema.parse(request.params)
    
    const content = await  prisma.content.findUniqueOrThrow({
      where: {
         id,
        	},
    })
    return content
  })


    app.post('/contents', async (request) => {
      const bodySchema = z.object({
        title: z.string(),
        coverUrl: z.string(),
      })     
      const { title, coverUrl } = bodySchema.parse(request.body)

      const content = await prisma.content.create({
        data: {
          title,
          coverUrl,
          userId: '566bc04c-2e87-454a-bc3e-8ace7ce884e1',
          genreId: 'd721841a-492d-4cd8-9087-ce0645940ccd', 
        },
      })
      return content
    })  

    app.put('/contents/:id', async (request) => {
      const paramsSchema = z.object({
        id: z.string(),
      })
    
      const { id } = paramsSchema.parse(request.params)

      const bodySchema = z.object({
        title: z.string(),
        coverUrl: z.string(),
      })     
      const { title, coverUrl } = bodySchema.parse(request.body)

      const contents = await prisma.content.update({
        where:{
          id,
        },
        data: {
          title,
          coverUrl,
        },
      })
      return contents
    })  

    app.delete('/contents/:id', async (request) => {
      const paramsSchema = z.object({
        id: z.string(),
      })
    
      const { id } = paramsSchema.parse(request.params)
      
      await  prisma.content.delete({
        where: {
           id,
            },
      })

    })  
}
