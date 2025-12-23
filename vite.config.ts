import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import saver from 'vite-plugin-svgr';
export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [react(), saver()],
});
