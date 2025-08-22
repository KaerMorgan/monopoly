import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        replaceAttrValues: {
          '#000': 'currentColor',
          '#000000': 'currentColor',
          black: 'currentColor',
          '#FFA500': 'currentColor',
          '#292929': 'currentColor',
          // Add other colors you want to replace
        },
      },
    }),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
