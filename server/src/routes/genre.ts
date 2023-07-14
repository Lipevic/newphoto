/* eslint-disable prettier/prettier */
import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function genreroute(app: FastifyInstance) {
  app.get('/genre', async () => {
    const genre= await prisma.genre.findMany({
      orderBy:{
      name  : 'asc',
      },
      
    })
    return genre.map(genre => {
      return{
        name: genre.name,
      }
    })
  })


 
}
