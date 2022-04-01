import React from 'react'
import { render } from 'react-dom'

import Newtab from './Newtab'
import './index.less'
import 'tailwindcss/tailwind.css'

render(<Newtab />, window.document.querySelector('#app-container'))

if (module.hot) {
  module.hot.accept()
}
