import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { client } from './ApolloClient'
import { ApolloProvider } from 'react-apollo'
import { LoginPage } from '@/pages/LoginPage'
import { FavoritePage } from '@/pages/FavoritePage'
import '@/styles/reset.scss'
import '@/styles/base.scss'
import '@/styles/fonts.scss'
import { StoreContext, SetStoreContext, StoreType, globalStore } from '@/store'

function App() {
  const [store, setStore] = useState<StoreType>(globalStore)

  return (
    <ApolloProvider client={client}>
      <StoreContext.Provider value={store}>
        <SetStoreContext.Provider value={setStore}>
          <Router>
            <div id="app">
              <Switch>
                <Route path="/login">
                  <LoginPage />
                </Route>
              </Switch>
              <Switch>
                <Route path="/favorite">
                  <FavoritePage />
                </Route>
              </Switch>
            </div>
          </Router>
        </SetStoreContext.Provider>
      </StoreContext.Provider>
    </ApolloProvider>
  )
}

export default App
