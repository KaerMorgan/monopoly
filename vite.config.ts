import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
  },
  resolve: {
    alias: {
      '@': '/src',
      '@icons': '/src/assets/icons',
      '@components': '/src/components',
    },
  },
});
