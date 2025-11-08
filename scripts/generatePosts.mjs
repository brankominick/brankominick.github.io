import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const srcDir = path.resolve("public/posts/posts-src");
const outDir = path.resolve("public/posts");

// Ensure output directory exists
await fs.ensureDir(outDir);

const files = await fs.readdir(srcDir);
const posts = [];

for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const fullPath = path.join(srcDir, file);
    const text = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(text, {gfm:true});

    const slug = file.replace(/\.md$/, "");

    // Convert Markdown to HTML 
    const html = marked(content);

    const dataJson = JSON.stringify(data);
    const finalHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>${data.title || "Untitled Post"}</title>
    </head>
    <body>
        <script id="post-meta" type="application/json">
        ${dataJson}
        </script>
        <div class="post-content">
        ${html}
        </div>
    </body>
    </html>
    `;

    // Write rendered HTML file to public/posts/
    const outPath = path.join(outDir, `${slug}.html`);
    fs.writeFileSync(outPath, finalHtml, "utf-8");

    // Collect metadata for posts.json
    posts.push({
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || content.slice(0, 120) + "...",
        date: data.date || new Date().toISOString(),
    });
}

// Sort by date descending
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Write posts.json
await fs.writeJson(path.join(outDir, "posts.json"), posts, { spaces: 2 });

console.log(`Generated ${posts.length} posts`);
