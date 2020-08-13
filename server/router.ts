import { Router, Request, Response, NextFunction } from 'express'
import axios from 'axios'
import {
  accessUserUrl,
  githubCallbackUrl,
  githubLoginUrl,
  githubTokenUrl
} from './config/github-config'

const router = Router()

router.get('/api/github-login', async (req: Request, res: Response) => {
  res.redirect(
    `${githubLoginUrl}/?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${githubCallbackUrl}`
  )
})

router.get(
  '/api/github-login/callback',
  getGithubUser,
  async (req: Request, res: Response) => {
    const githubUser = req.githubUser
    // user를 찾고 없을시 DB에 저장
    // 해당 user에 맞는 토큰 생성 및 발행
    res.json(githubUser)
  }
)

export default router

async function getGithubUser(req: Request, res: Response, next: NextFunction) {
  const code = req.query.code
  try {
    const { data } = await getAccessToekn(code)
    const accessToken = parseAccessToken(data)
    const githubUser = await getUserData(accessToken)
    req.githubUser = githubUser.data
    next()
  } catch (e) {
    console.log(e)
  }
}

async function getAccessToekn(code) {
  return await axios(githubTokenUrl, {
    method: 'POST',
    params: {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code
    }
  })
}

async function getUserData(accessToken: string) {
  return await axios(accessUserUrl, {
    method: 'GET',
    headers: {
      Authorization: `token ${accessToken}`
    }
  })
}

function parseAccessToken(data): string {
  const splittedData = data.split('&')

  const parsedData = splittedData.reduce((parsed, currentItem) => {
    const keyValue = currentItem.split('=')
    const key = keyValue[0]
    const value = keyValue[1]
    parsed[key] = value
    return parsed
  }, {})
  return parsedData.access_token
}
