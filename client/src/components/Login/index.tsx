import React from 'react'
import { useQuery } from 'react-apollo'
import { GET_USERS } from './gql'

import './login.scss';
import { FaGithubSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa';



export const Login = () => {

  return (
    <div className="login-section"> 
      <div>
        {/* <image src={process.env.PUBLIC_URL + "/images/bmartlogo.jpeg"}/> */}
        <img className="logo" src='./images/bmartlogo.jpeg'/>
        </div>
      <div className="social-login-wrap">
        <div className="login-btn-wrap">
        <FaGithubSquare size={50}/>
        <div className="login-text">Login woth Github</div>
        </div>

        <div className="login-btn-wrap">
        <FaFacebookSquare size={50}/>
        <div className="login-text">Login woth Facebook</div>
        </div>
        <div className="social-login-title">Click SocialLogin</div>
      </div>
    </div>
  )
}



// export const Login = () => {
//   const { loading, error, data } = useQuery(GET_USERS)
//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error!(</p>
//   return (
//     <ul>
//       {data.users.map(({ code, name }) => (
//         <li key={code}>{name}</li>
//       ))}
//     </ul>
//   )
// }
