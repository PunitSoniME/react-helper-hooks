import { defineConfig } from 'vite';
import ReactPlugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactPlugin({})],
  base: '/react-helper-hooks/',  //  This is required when using Github Pages
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
