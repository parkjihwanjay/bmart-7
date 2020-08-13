import React, {useEffect} from 'react'
import { useQuery } from 'react-apollo'
import { GET_USERS } from './gql'

import './login.scss'
import { FaGithubSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import axios from 'axios'

const baseUrl = 'http://localhost:4000'
const githubLoginUrl = 'https://github.com/login/oauth/authorize'
// const githubCallbackUrl = `${baseUrl}/api/github-login/callback`
const githubCallbackUrl = `http://localhost:3000`
const GITHUB_CLIENT_ID='9368cfd68ad4ee3c646e'

export const Login = () => {
  useEffect(() => {
    const url = window.location.search.substring(1);
    const queryList = url.split('&')

    const queryObject = queryList.reduce((query, currentItem) => {
      const keyValue = currentItem.split('=')
      const key = keyValue[0]
      const value = keyValue[1]
      query[key] = value
      return query
    }, {})
    
    const code = queryObject['code']
    if(!code) return

    axios.get(`/api/github-login/?code=${code}`).then(res => {
      localStorage.setItem('token', res.data.token)
    })
  })
  const githubLoginHandler = async e => {
    location.href = `https://github.com/login/oauth/authorize/?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${githubCallbackUrl}`
  }

  return (
    <div className="login-section">
      <img className="logo" src="./images/bmartlogo.jpeg" />
      <div className="social-login-wrap">
        <div className="login-btn-wrap">
          <FaGithubSquare size={50} />
          <div className="login-text" onClick={githubLoginHandler}>Login with Github</div>
        </div>

        <div className="login-btn-wrap">
          <FaFacebookSquare size={50} />
          <div className="login-text">Login woth Facebook</div>
        </div>
        <div className="social-login-title">Click SocialLogin</div>
      </div>
    </div>
  )
}
