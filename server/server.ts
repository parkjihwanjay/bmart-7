import dotenv from 'dotenv'
import logger from 'morgan'
import path from 'path'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'
import { createContext } from './graphql/context'

if (process.env.NODE_ENV === 'prod') {
  dotenv.config({ path: path.join(__dirname, './.env.prod') })
} else if (process.env.NODE_ENV === 'dev') {
  dotenv.config({ path: path.join(__dirname, './.env.dev') })
} else {
  throw new Error('process.env.NODE_ENV를 설정하지 않았습니다!')
}

const app = express()
const server = new ApolloServer({
  schema,
  context: createContext
})

app.use(logger('dev'))

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
