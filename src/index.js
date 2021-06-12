import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'

import App from './App'

function Greet() {
  return <App />
}

ReactDOM.render(<Greet />, document.getElementById('root'))
