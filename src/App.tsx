import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routesConfig } from './routes'
import { history } from '@/utils'

const App = () => {
  return (
    <React.StrictMode>
      <Router history={history}>{renderRoutes(routesConfig)}</Router>
    </React.StrictMode>
  )
}

export default hot(App)
