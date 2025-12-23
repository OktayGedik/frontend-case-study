import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import saver from 'vite-plugin-svgr';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [react(), saver()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/shared': path.resolve(__dirname, './src/shared'),
      '@/components': path.resolve(__dirname, './src/components'),
    },
  },
});
