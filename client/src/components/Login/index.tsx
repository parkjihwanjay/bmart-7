import React from 'react'
import { SocialLoginBtn } from '../SocialLoginBtn/index'
import './login.scss'

export const Login = () => {
  return (
    <div className="login-section">
      <img className="logo" src="./images/bmartlogo.jpeg" />
      <div className="social-login-wrap">
        <SocialLoginBtn icon="github">Login woth Github</SocialLoginBtn>
        <SocialLoginBtn icon="facebook">Login woth Facebook</SocialLoginBtn>
        <div className="social-login-title">Click SocialLogin</div>
      </div>
    </div>
  )
}
