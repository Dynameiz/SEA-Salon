import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { AuthProvider } from './provider/AuthProvider.jsx'
import { ComponentProvider } from './provider/ComponentProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ComponentProvider>
        <App />
      </ComponentProvider>
    </AuthProvider>
  </React.StrictMode>,
)
