import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],

    // ✅ Allow Kuberns domain when using: vite preview
    preview: {
      allowedHosts: [
        'mahavir-portfolio-main-531d1dd.kuberns.cloud',
        // If Kuberns changes the URL sometimes, you must add the new host here too.
      ],
    },

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});