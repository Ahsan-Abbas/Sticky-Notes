import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: "spa",
  server: {
    port: 5200,
    strictPort: true,
    host: "localhost",
    open: true, //open the browser when starting dev server
    hmr: {
      protocol: "ws",
      clientPort: 5200
    }
  },
  //esbuild: {charset: "utf8"}, //TODO: check if this can fix the issue with cssMinify
  build: {
    cssMinify: false, //disabling for now, as minify replaces css content like "\f107" with the actual character, which doesn't work when running from Azure DevOps. Error started in Vite 4.3.0
    rollupOptions: {
      input: {
        index: "index.html",
        firestop: "firestop.html"
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      }
    }
  },
  experimental: {
    renderBuiltUrl: (filename, _) => filename + "?" + new Date().toISOString()
  }
})
