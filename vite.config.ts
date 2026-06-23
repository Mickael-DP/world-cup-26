import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
 
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {

      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
      proxy: {
        '/api': {
          target: 'https://api.football-data.org/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              proxyReq.setHeader('X-Auth-Token', env.VITE_API_KEY);
              req.headers['X-Auth-Token'] = env.VITE_API_KEY;
              res.setHeader('X-Auth-Token', env.VITE_API_KEY);
            });
          },

        },
      },
    },
     plugins: [react(), tailwindcss(),],
  }
})