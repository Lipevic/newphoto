import fastify from 'fastify'
import { contentsroute } from './routes/content'
import { genreroute } from './routes/genre'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: true, //  em produção se coloca o URL de quem vai fazer as manutenções da aplicação
})
app.register(contentsroute)
app.register(genreroute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
