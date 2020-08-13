import React from 'react'
import { client } from './ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { LoginPage } from './pages/LoginPage'
import './app.scss'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <LoginPage />
      </div>
    </ApolloProvider>
  )
}

export default App
