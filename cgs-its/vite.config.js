// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    // Let Vite bundle `ogl` instead of marking it external
    // rollupOptions: {
    //   external: ['ogl'],
    // },
  },
  optimizeDeps: {
    // Pre-bundle `ogl` for faster dev startup and HMR
    include: ['ogl']
  }
})
