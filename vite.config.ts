import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from "vite-tsconfig-paths"
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      "components": path.resolve(__dirname, "src/components")
    },
  },
})
