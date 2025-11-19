import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import mdx from '@mdx-js/rollup';
import path from "path";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwind(), mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    })],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
});
