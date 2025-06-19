import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sufiyan-portfolio/', // <-- GitHub repo name
  plugins: [react()],
});
