import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { client } from './ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { LoginPage } from '@/pages/LoginPage'
import '@/styles/reset.scss'
import '@/styles/base.scss'
import '@/styles/fonts.scss'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div id="app">
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
