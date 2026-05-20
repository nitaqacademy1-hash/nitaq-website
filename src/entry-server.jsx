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

  // Explicitly extract the helmet instance from the completed context object
  const { helmet } = helmetContext

  return {
    html,
    head: helmet ? `
      ${helmet.title ? helmet.title.toString() : ''}
      ${helmet.meta ? helmet.meta.toString() : ''}
      ${helmet.link ? helmet.link.toString() : ''}
      ${helmet.script ? helmet.script.toString() : ''}
    ` : ''
  }
}
