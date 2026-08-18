import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'enrolment-html-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/enrolment' || req.url === '/enrolment/') {
            req.url = '/enrolment.html';
          }
          next();
        });
      }
    }
  ],
})

