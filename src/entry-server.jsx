import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { StrictMode } from 'react'
import App from './App.jsx'

export function render(url, context = {}) {
  const helmetContext = {}

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url} context={context}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  )

  const { helmet } = helmetContext

  return {
    html,
    head: `
      ${helmet ? helmet.title.toString() : ''}
      ${helmet ? helmet.meta.toString() : ''}
      ${helmet ? helmet.link.toString() : ''}
    `
  }
}
