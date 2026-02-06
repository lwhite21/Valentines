import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // allow importing HEIC files as static assets
  assetsInclude: ['**/*.{heic,HEIC}'],
  // GitHub Pages serves at /repo-name/ so set base path
  base: '/Valentines/',
  build: {
    // Ensure CSS is properly handled with base path
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return `assets/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    }
  }
})
