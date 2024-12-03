import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend server URL
        changeOrigin: true, // Adjust the Origin header to match the target
        secure: false, // If your backend uses HTTPS with self-signed certs
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
