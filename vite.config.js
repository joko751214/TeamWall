import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/TeamWall/',
  server: {
    port: 3005,
    proxy: {
      '/api': {
        target: 'https://glacial-forest-47470.herokuapp.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^' + '/api'), ''),
      },
    },
  },
});
