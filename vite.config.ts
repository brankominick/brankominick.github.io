import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generatePostsPlugin from "./scripts/vitePluginGeneratePosts";
import tailwind from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react(), generatePostsPlugin(), tailwind()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
});
