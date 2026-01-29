import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true, // or use '0.0.0.0' explicitly
    port: 5173,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
