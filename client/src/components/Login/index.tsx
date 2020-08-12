import React from 'react'
import { useQuery } from 'react-apollo'
import { GET_USERS } from './gql'

import bmartLogo from '../../imgs/bmartlogo.jpeg'
import { FaGithubSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa';
import styled, { css } from 'styled-components';

const LoginSection = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  border:1px solid gray;
  
`
const Logo = styled.img`
  width: 250px;
  margin-bottom:10px
`;

const SocialLoginWrap = styled.div`
  width:60%;
  display:flex;
  flex-direction:column;
  margin-bottom: 50px;
`;

const SocialLoginTitle = styled.div`
  text-align: center;
  color: black;
  font-weight: 600;
  margin-bottom:10px;
  color:gray;
`

const LoginBtnWrap = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  margin-bottom:15px;
  background-color: lightgray;
  border-radius: 8px;
`;

const LoginText = styled.div`
margin-left:10%
`;




export const Login = () => {

  return (
    <LoginSection> 
      <Logo src={bmartLogo} />
      <SocialLoginWrap>
        <LoginBtnWrap>
        <FaGithubSquare size={50}/>
        <LoginText>Login woth Github</LoginText>
        </LoginBtnWrap>

        <LoginBtnWrap>
        <FaFacebookSquare size={50}/>
        <LoginText>Login woth Facebook</LoginText>
        </LoginBtnWrap>
        <SocialLoginTitle>Click SocialLogin</SocialLoginTitle>
      </SocialLoginWrap>
    </LoginSection>
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
