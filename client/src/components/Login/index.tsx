import React from 'react'
import { useQuery } from 'react-apollo'
import { GET_USERS } from './gql'

export const Login = () => {
  const { loading, error, data } = useQuery(GET_USERS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!(</p>
  return (
    <ul>
      {data.users.map(({ code, name }) => (
        <li key={code}>{name}</li>
      ))}
    </ul>
  )
}
