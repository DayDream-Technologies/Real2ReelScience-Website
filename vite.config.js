import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://<user>.github.io/<repo>/
// Update base to match your repository name (with leading/trailing slash).
export default defineConfig({
  base: '/Real2ReelScience-Website/',
  plugins: [react()],
})
