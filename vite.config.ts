import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import i18nextLoader from "vite-plugin-i18next-loader";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [
    react(),
    i18nextLoader({ paths: ['./src/locales'] }),
  ],
  optimizeDeps: {
      esbuildOptions: {
          define: {
              global: 'globalThis'
          },
          plugins: [
              NodeGlobalsPolyfillPlugin({
                  buffer: true
              })
          ]
      }
  }
});
