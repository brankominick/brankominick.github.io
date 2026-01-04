import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/src/mdx/components";
import remarkGfm from "remark-gfm";

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  img?: string;
}

const postsDir = path.join(process.cwd(), "posts");

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".mdx"));

  return files
    .map(file => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDir, file);
      const raw = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        date: data.date ?? "",
        img: data.img,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);
  const compiled = await compileMDX({
    source: content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
    },
    },
  });

  return {
    content: compiled.content,
    metadata: {
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        img: data.img,
        date:
            data.date instanceof Date
            ? data.date.toISOString()
            : data.date,
    },
  };
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter(f => f.endsWith(".mdx"))
    .map(f => f.replace(/\.mdx$/, ""));
}
