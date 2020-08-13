import dotenv from 'dotenv'
import path from 'path'
if (process.env.NODE_ENV === 'prod') {
  dotenv.config({ path: path.join(__dirname, './.env.prod') })
} else if (process.env.NODE_ENV === 'dev') {
  dotenv.config({ path: path.join(__dirname, './.env.dev') })
} else {
  throw new Error('process.env.NODE_ENV를 설정하지 않았습니다!')
}

import express, { Router } from 'express'
import logger from 'morgan'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'
import { createContext } from './graphql/context'
import userRouter from './router'

const app = express()

declare global {
  namespace Express {
    export interface Request {
      githubUser?: {}
    }
  }
}
app.use(logger('dev'))
app.use(userRouter)

const apolloServer = new ApolloServer({
  schema,
  context: createContext
})
apolloServer.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  )
)
