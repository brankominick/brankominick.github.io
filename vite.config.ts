import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generatePostsPlugin from "./scripts/vitePluginGeneratePosts";
import tailwind from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react(), generatePostsPlugin(), tailwind()],
  // ✅ Use `mode` instead of `process.env.NODE_ENV`
  base: mode === "production" ? "/my-repo-name/" : "/",
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
}));
