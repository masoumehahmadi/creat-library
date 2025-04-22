import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import copy from "rollup-plugin-copy";
export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src/components/Button",
      include: ["src/components/Button/**/*.ts", "src/components/Button/**/*.tsx"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
      rollupTypes: false,
      insertTypesEntry: true,
      copyDtsFiles: true,
      outDir: "dist/",
      tsconfigPath: "./tsconfig.json"
    }),
  ],

  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },

  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "src/components/Button/index.ts"),
      formats: ["es", "cjs"],
      name: "hometask",
      fileName: (format) => `hometask.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      plugins: [
        copy({
          targets: [
            {
              src: "src/components/Button/**/*.ts*",
              dest: "dist/",
            },
          ],
          hook: "writeBundle",
          verbose: true,
        }),
      ],
      output: {
        assetFileNames: 'assets/[name][extname]',
        preserveModulesRoot: "src/**/*",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    emptyOutDir: true,
    copyPublicDir: false,
  },
});