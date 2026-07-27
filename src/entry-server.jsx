import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import React from 'react'
import App from './App.jsx'

/**
 * Static SSR entry. Uses react-dom/static's prerender (not renderToString)
 * because the route tree is code-split with React.lazy — prerender awaits
 * Suspense boundaries, so each page's chunk is resolved and the full HTML is
 * emitted. renderToString would emit only the Suspense fallback.
 */
export async function render(url) {
  const helmetContext = {}

  // Clean URL to ensure matching
  const cleanUrl = url === '/' ? '/' : url.replace(/\/$/, '')

  let html = ''

  try {
    const { prelude } = await prerender(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={cleanUrl}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    )

    // prelude is a Web ReadableStream — collect it into a string.
    const reader = prelude.getReader()
    const decoder = new TextDecoder()
    let chunk
    while (!(chunk = await reader.read()).done) {
      html += decoder.decode(chunk.value, { stream: true })
    }
    html += decoder.decode()
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
