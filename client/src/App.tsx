import React from 'react'
import { client } from './ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { LoginPage } from './pages/LoginPage'
import styled, { css } from 'styled-components'


const AppContainer = styled.div`
display:flex;
flex-direction:column;
width:400px;
height: 500px;
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <LoginPage />
      </AppContainer>
    </ApolloProvider>
  )
}

export default App
