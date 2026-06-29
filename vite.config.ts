import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const withToken = (path: string): import("vite").ProxyOptions => ({
    target: "https://api.football-data.org",
    changeOrigin: true,
    rewrite: () => path,
    configure: (p) => {
      p.on("proxyReq", (proxyReq) => {
        proxyReq.setHeader("X-Auth-Token", env.VITE_API_KEY);
      });
    },
  });

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
      proxy: {
        "/api/standings": withToken("/v4/competitions/WC/standings"),
        "/api/matches": withToken("/v4/competitions/WC/matches"),
        "/api/scorers": withToken("/v4/competitions/WC/scorers"),
      },
    },
    plugins: [react(), tailwindcss()],
  };
});
