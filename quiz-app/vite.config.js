<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure Vite starts from the root folder
  build: {
    outDir: 'build', // Output directory for the build
  }
});
=======
// vite.config.js
export default {
  build: {
    outDir: 'build', // Ensure Vercel looks for this directory
  },
};
>>>>>>> a4c31a49067df4521d6ed12041e95311916cd1b7
