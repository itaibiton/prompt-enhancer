import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Set dark mode by default
if (!document.documentElement.classList.contains('dark')) {
  document.documentElement.classList.add('dark')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
