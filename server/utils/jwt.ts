import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import path from 'path'

if (process.env.NODE_ENV == 'test')
  dotenv.config({ path: path.join(__dirname, '../.env.test') })

type IDecoded = {
  id: number
  username: string
  iat?: number
  exp?: number
  iss?: string
  sub?: string
}

type IGithubUser = {
  login: string
  id: number
}

const jwtOption = {
  expiresIn: '30d',
  issuer: 'jihwan',
  subject: 'userInfo'
}

export const encodeJwt = async (githubUser: IGithubUser): Promise<string> => {
  const token = await jwt.sign(
    {
      id: githubUser.id,
      username: githubUser.login
    },
    process.env.JWT_SECRET,
    jwtOption
  )
  return token
}

export const decodeJwt = async (token: string): Promise<IDecoded> => {
  return await jwt.verify(token, process.env.JWT_SECRET)
}
