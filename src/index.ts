import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import { PrismaClient } from '@prisma/client'

import schema from './schema'

console.log(`NODE_ENV=${process.env.NODE_ENV}`)

const server = new ApolloServer({ schema, context: () => ({ prisma }) })
const app = new Koa()
const prisma = new PrismaClient()

server.applyMiddleware({ app })
// alternatively you can get a composed middleware from the apollo server
// app.use(server.getMiddleware());

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
