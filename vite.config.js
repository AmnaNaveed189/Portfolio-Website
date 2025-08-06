// ✅ Add these imports at the top
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Content-Security-Policy": "script-src 'self' 'unsafe-inline'"
    }
  }
});
