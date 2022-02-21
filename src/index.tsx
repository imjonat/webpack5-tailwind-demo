import React from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'
import '@/styles/global.less'

const renderApp = App => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

import(/* webpackChunkName: "app" */ './App').then(({ default: App }) => {
  renderApp(App)
})
