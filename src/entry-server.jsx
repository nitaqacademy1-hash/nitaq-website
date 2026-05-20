import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import React from 'react'
import App, { AppContent } from './App.jsx'

export function render(url, context = {}) {
  const helmetContext = {}
  const cleanUrl = url === '/' ? '/' : url.replace(/\/$/, '')

  let html = ''

  try {
    // Force a safe, direct tree render using HelmetProvider context
    html = renderToString(
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    )
  } catch (error) {
    // Fallback pass directly executing the inner content nodes if the shell contains client hooks
    try {
      html = renderToString(
        <HelmetProvider context={helmetContext}>
          <AppContent />
        </HelmetProvider>
      )
    } catch (fallbackError) {
      console.error("SSR compilation failure:", fallbackError.message)
    }
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
