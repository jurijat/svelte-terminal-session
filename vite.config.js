import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'TerminalSession',
      fileName: (format) => `terminal-session.${format}.js`,
    },
  },
});