import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "public", "posts");
const outputFile = path.join(postsDir, "posts.json");

async function generatePosts() {
  const files = await fs.readdir(postsDir);
  const posts = [];

  for (const file of files) {
    if (file.endsWith(".md")) {
      const filePath = path.join(postsDir, file);
      const content = await fs.readFile(filePath, "utf-8");
      const { data } = matter(content);

      posts.push({
        slug: file.replace(/\.md$/, ""),
        title: data.title || file.replace(/\.md$/, ""),
        date: data.date || new Date().toISOString().split("T")[0],
      });
    }
  }

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  await fs.writeJSON(outputFile, posts, { spaces: 2 });
  console.log(`✅ Generated ${posts.length} posts in posts.json`);
}

generatePosts();
