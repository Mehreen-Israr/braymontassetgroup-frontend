// vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Allows deploying under a sub-path without breaking module/asset URLs.
  // Example: VITE_BASE_URL=/braymont/  (must start and end with "/")
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE_URL || '/';

  return {
    base,
    plugins: [react()],
  };
});