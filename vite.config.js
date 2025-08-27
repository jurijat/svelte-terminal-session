import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
  root: "docs",
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "TerminalSession",
      fileName: (format) => `terminal-session.${format}.js`,
    },
    rollupOptions: {
      // Bundle everything for standalone web component
      // Note: For NPM publishing, you might want svelte as external
      // but for GitHub Pages demo, we need it bundled
      output: {
        // No globals needed when everything is bundled
      },
    },
  },
  server: {
    open: true,
  },
});
