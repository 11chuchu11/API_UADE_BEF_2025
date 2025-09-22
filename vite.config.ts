// vite.config.ts
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // alias @ → src
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)), // alias @components → src/components
      "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)), // alias @hooks → src/hooks
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)), // alias @utils → src/utils
    },
  },
  build: {
    sourcemap: false,      
    outDir: "build/client" 
  },

});
