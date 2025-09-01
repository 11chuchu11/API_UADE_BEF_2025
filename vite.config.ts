// vite.config.ts
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    reactRouter()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // alias @ → src
    },
  },
  build: {
    sourcemap: false,      
    outDir: "build/client" 
  },

});
