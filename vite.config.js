import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Dev runs on http://localhost:5173/ru and /ua.
// On production deploy, serve the same index.html for /ru and /ua paths
// (rewrite all unknown paths to /index.html — SPA fallback).
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    open: '/ru',
  },
  preview: {
    port: 4173,
    open: '/ru',
  },
});

