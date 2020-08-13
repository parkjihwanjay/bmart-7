import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import path from 'path'

if (process.env.NODE_ENV == 'test')
  dotenv.config({ path: path.join(__dirname, '../.env.test') })

export const encodeJwt = async githubUser => {
  const token = await jwt.sign(
    {
      id: githubUser.id,
      username: githubUser.login
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
      issuer: 'jihwan',
      subject: 'userInfo'
    }
  )
  return token
}

export const decodeJwt = async token => {
  return await jwt.verify(token, process.env.JWT_SECRET)
}
