import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export function render(url, context = {}) {
  const helmetContext = {}
  
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  return {
    html,
    head: helmet ? `
      ${helmet.title ? helmet.title.toString() : ''}
      ${helmet.meta ? helmet.meta.toString() : ''}
      ${helmet.link ? helmet.link.toString() : ''}
      ${helmet.script ? helmet.script.toString() : ''}
    `.trim() : ''
  }
}
