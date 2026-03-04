import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    // ✅ Dev server settings (local)
    server: {
      allowedHosts: true, // avoids host blocking if needed
      hmr: process.env.DISABLE_HMR !== 'true',
    },

    // ✅ This is what Kuberns uses (vite preview)
    preview: {
      allowedHosts: true,   // IMPORTANT: don't block Kuberns URL
      host: true,           // listen on 0.0.0.0
      port: 3000,
      strictPort: true,
    },
  };
});