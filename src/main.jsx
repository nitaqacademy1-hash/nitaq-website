import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// If the page was pre-rendered (has real content inside #root), hydrate.
// Otherwise, do a fresh render (dev mode / first load).
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
