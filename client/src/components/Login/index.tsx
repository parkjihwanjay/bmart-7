import React, {useEffect} from 'react'
import { SocialLoginBtn } from '../SocialLoginBtn/index'
import './login.scss'
import axios from 'axios'
import queryParser from 'query-parser-url'
import {socialSites} from './config'

const socialLoginBtnList = socialSites.map((site) => {
  return <SocialLoginBtn icon={site.icon} text={site.text} href={site.href}/>
})

export const Login = () => {
  useEffect(() => {
    const url = window.location.search.substring(1)

    const queryObject = queryParser(url)
    const code = queryObject['code']
    if (!code) return

    axios.get(`/api/github-login/?code=${code}`).then(res => {
      localStorage.setItem('token', res.data.token)
    })
  }, []);

  return (
    <div className="login-section">
      <img className="logo" src="./images/bmartlogo.jpeg" />
      <div className="social-login-wrap">
        {socialLoginBtnList}
        <div className="social-login-title">Click SocialLogin</div>
      </div>
    </div>
  )
}
