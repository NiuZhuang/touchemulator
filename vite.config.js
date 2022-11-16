import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [],
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [],
});
