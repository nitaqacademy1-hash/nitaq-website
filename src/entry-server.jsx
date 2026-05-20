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
      ${helmetContext.helmet ? helmetContext.helmet.title.toString() : ''}
      ${helmetContext.helmet ? helmetContext.helmet.meta.toString() : ''}
      ${helmetContext.helmet ? helmetContext.helmet.link.toString() : ''}
      ${helmetContext.helmet ? helmetContext.helmet.script.toString() : ''}
    `
  }
}
