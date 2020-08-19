import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { client } from './ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { LoginPage } from '@/pages/LoginPage'
import '@/app.scss'
import '@/styles/reset.scss'
import '@/styles/base.scss'
import '@/styles/fonts.scss'
import { MainPage } from './pages/MainPage'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/main">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
