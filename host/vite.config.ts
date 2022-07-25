import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// HOST
// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3000,
  },
  build: {
    target: "esnext",
    minify: false,
  },
  plugins: [
    react(),
    federation({
      remotes: {
        remote: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: {
        react: {
          requiredVersion: "^18.2.0",
          singleton: true,
          // version: "18.2.0",
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
        },
      },
    }),
  ],
});
