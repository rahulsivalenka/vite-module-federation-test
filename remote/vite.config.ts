import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// REMOTE
// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3001,
  },
  build: {
    target: "esnext",
    minify: false,
  },
  plugins: [
    react(),
    federation({
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: {
        react: {
          requiredVersion: "^18.2.0",
          singleton: true,
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
        },
      },
    }),
  ],
});
