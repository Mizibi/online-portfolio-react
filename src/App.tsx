import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import { Header } from './menu/Header'
import { pagesToRoutes } from './pages/tools/pages'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {pagesToRoutes()}
      </Switch>
    </Router>
  )
}

export default App
