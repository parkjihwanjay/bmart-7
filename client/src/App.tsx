import React from 'react'
import { client } from './ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <LoginPage />
      </div>
    </ApolloProvider>
  )
}

export default App
