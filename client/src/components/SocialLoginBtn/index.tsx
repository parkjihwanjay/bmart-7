import React from 'react'
import './socialLoginBtn.scss'
import { FaGithubSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

type IProps = {
  icon : string
  text : string
  href : string
}

const getIcon = (icon : string) => {
  switch(icon){
    case 'github':
      return <FaGithubSquare size={50} />
    case 'facebook':
      return <FaFacebookSquare className="facebook" size={50} />
  }
}
export const SocialLoginBtn = (props: IProps) => {
  const {icon, href, text} = props
  return (
    <a href={href}>
      <button className="login-btn-wrap">
        {getIcon(icon)}
        <div className="login-text">{text}</div>
      </button>
    </a>
  )
}
