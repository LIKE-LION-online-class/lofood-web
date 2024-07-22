import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import * as path from 'path';
import MillionLint from '@million/lint';

export default defineConfig({
  plugins: [react(), MillionLint.vite()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: { port: 5173 },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          '@mui': ['@mui/material', '@emotion/react', '@emotion/styled'],
        },
      },
    },
  },
});
