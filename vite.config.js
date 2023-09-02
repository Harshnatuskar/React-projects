import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginGhPages from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),  
    VitePluginGhPages({
      base: 'quote-generator',
      outDir: 'dist',
    }),
  ],
});