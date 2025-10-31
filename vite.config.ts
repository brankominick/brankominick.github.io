import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generatePostsPlugin from "./scripts/vitePluginGeneratePosts";
import tailwind from "@tailwindcss/vite";
import path from 'path';

// Vite configuration
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react(), generatePostsPlugin(), tailwind()],
  base: process.env.NODE_ENV === "production" ? "/my-repo-name/" : "/",
  resolve:
    {alias: {
                '@components': path.resolve(__dirname, './src/components'),
                '@public': path.resolve(__dirname, './public'),
            },
          }
});
