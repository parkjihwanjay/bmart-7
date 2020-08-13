import React, { useEffect } from 'react'
import './socialLoginBtn.scss'
import { FaGithubSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

import axios from 'axios'
import queryParser from 'query-parser-url'
const baseUrl = 'http://localhost:4000'
const githubLoginUrl = 'https://github.com/login/oauth/authorize'
const githubCallbackUrl = `http://localhost:3000`
const GITHUB_CLIENT_ID = '9368cfd68ad4ee3c646e'

export const SocialLoginBtn = (props: any) => {
  useEffect(() => {
    const url = window.location.search.substring(1)

    const queryObject = queryParser(url)
    const code = queryObject['code']
    if (!code) return

    axios.get(`/api/github-login/?code=${code}`).then(res => {
      localStorage.setItem('token', res.data.token)
    })
  })
  const githubLoginHandler = async e => {
    location.href = `https://github.com/login/oauth/authorize/?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${githubCallbackUrl}`
  }

  return (
    <button className="login-btn-wrap" onClick={githubLoginHandler}>
      {props.icon === 'github' ? (
        <FaGithubSquare size={50} />
      ) : (
        <FaFacebookSquare className="facebook" size={50} />
      )}
      <div className="login-text">{props.children}</div>
    </button>
  )
}
