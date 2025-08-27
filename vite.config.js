import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig(({ mode }) => {
  const isLibraryBuild =
    mode === "production" || process.env.BUILD_MODE === "library";

  if (isLibraryBuild) {
    // Library build configuration
    return {
      plugins: [
        svelte({
          compilerOptions: {
            customElement: true,
          },
        }),
        dts({
          insertTypesEntry: true,
          outDir: "dist",
          include: ["src/**/*.ts", "src/**/*.svelte"],
          exclude: ["src/**/*.test.*", "docs/**/*", "test-app/**/*"],
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
          output: {
            // No globals needed when everything is bundled
          },
        },
      },
    };
  } else {
    // Dev server configuration
    return {
      root: "docs",
      plugins: [
        svelte({
          compilerOptions: {
            customElement: true,
          },
        }),
      ],
      server: {
        open: true,
      },
    };
  }
});
