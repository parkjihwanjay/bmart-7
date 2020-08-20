import { Router, Request, Response, NextFunction } from 'express'
import axios from 'axios'
import { accessUserUrl, githubTokenUrl } from './config/github-config'
import prisma from './prisma'
import { encodeJwt } from './utils/jwt'
import queryParser from 'query-parser-url'

const router = Router()

router.get(
  '/api/github-login',
  getGithubUser,
  findOrCreateUser,
  async (req: Request, res: Response) => {
    const user = req.user
    // 해당 user에 맞는 토큰 생성 및 발행
    const token = await encodeJwt(user)
    res.status(200).json({
      token,
    })
  }
)

export default router

async function findOrCreateUser(req: Request, res: Response, next: NextFunction) {
  const githubUser = req.githubUser
  // id를 기준으로 DB에서 user를 찾는다
  let user = await prisma.user.findOne({
    where: {
      id: githubUser.id,
    },
  })

  // 해당 user가 없어 DB에 등록
  if (!user) {
    user = await prisma.user.create({
      data: {
        id: githubUser.id,
        userId: githubUser.login,
        email: githubUser.email,
      },
    })
  }

  req.user = user
  next()
}

async function getGithubUser(req: Request, res: Response, next: NextFunction) {
  const code = req.query.code
  try {
    const { data } = await getAccessToken(code)
    const accessToken = parseAccessToken(data)
    const githubUser = await getUserData(accessToken)
    req.githubUser = githubUser.data
    next()
  } catch (e) {
    console.log(e)
  }
}

async function getAccessToken(code) {
  return await axios(githubTokenUrl, {
    method: 'POST',
    params: {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    },
  })
}

async function getUserData(accessToken: string) {
  return await axios(accessUserUrl, {
    method: 'GET',
    headers: {
      Authorization: `token ${accessToken}`,
    },
  })
}

function parseAccessToken(data): string {
  const parsedData = queryParser(data)
  return parsedData.access_token
}
