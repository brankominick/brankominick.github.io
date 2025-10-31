import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Plugin } from "vite";

export default function generatePostsPlugin(): Plugin {
  return {
    name: "generate-posts",
    apply: "serve",
    buildStart() {
      const postsDir = path.join(process.cwd(), "public", "posts");
      const outputFile = path.join(postsDir, "posts.json");

      if (!fs.existsSync(postsDir)) {
        console.warn("⚠️  No posts directory found. Skipping post generation.");
        return;
      }

      const files = fs.readdirSync(postsDir);
      const posts = files
        .filter((f) => f.endsWith(".md"))
        .map((file) => {
          const filePath = path.join(postsDir, file);
          const text = fs.readFileSync(filePath, "utf8");
          const { data } = matter(text);
          return {
            slug: file.replace(/\.md$/, ""),
            title: data.title || file.replace(/\.md$/, ""),
            date: data.date || new Date().toISOString().split("T")[0],
          };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
      console.log(`✅ Generated ${posts.length} posts in ${outputFile}`);
    },
  } as Plugin;
}
