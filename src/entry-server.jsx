import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import React from 'react'
import { AppContent } from './App.jsx'

export function render(url, context = {}) {
  const helmetContext = {}
  
  // Strip trailing slashes to guarantee clean routing string alignment
  const cleanUrl = url === '/' ? '/' : url.replace(/\/$/, '')

  let html = ''
  
  try {
    // Isolate AppContent directly to guarantee it executes matching route components without outer shell interference
    html = renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={cleanUrl}>
          <AppContent />
        </StaticRouter>
      </HelmetProvider>
    )
  } catch (error) {
    console.error(`❌ SSR execution failed on path [${cleanUrl}]:`, error.message);
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
