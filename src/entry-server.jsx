import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import React from 'react'
import App from './App.jsx'

export function render(url, context = {}) {
  const helmetContext = {}
  
  // Clean URL to ensure matching
  const cleanUrl = url === '/' ? '/' : url.replace(/\/$/, '')

  let html = ''
  
  try {
    // We MUST use StaticRouter here so useLocation() and Routes can function
    html = renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={cleanUrl}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    )
  } catch (error) {
    console.error(`❌ SSR Render Error [${cleanUrl}]:`, error.message)
  }

  const { helmet } = helmetContext

  return {
    html,
    head: helmet ? [
      helmet.title ? helmet.title.toString() : '',
      helmet.meta ? helmet.meta.toString() : '',
      helmet.link ? helmet.link.toString() : '',
      helmet.script ? helmet.script.toString() : ''
    ].join('\n').trim() : ''
  }
}
