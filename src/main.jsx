import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// The prerenderer marks its crawlable head tags as server-owned. Remove those
// immediately before the client app mounts so react-helmet-async becomes the sole runtime
// owner instead of appending a second canonical/description/schema set.
document.head.querySelectorAll('[data-rh="true"]').forEach((node) => node.remove())
const root = document.getElementById('root')
root.replaceChildren()

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
