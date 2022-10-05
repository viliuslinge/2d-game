import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      engine: path.resolve(__dirname, "./src/engine"),
    },
  },
});
