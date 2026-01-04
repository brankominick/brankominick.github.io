import { getPostBySlug, getPostSlugs } from "@/src/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/src/mdx/components";

export const dynamic = "force-static";

export function generateStaticParams() {
  const slugs = getPostSlugs();
  console.log("generateStaticParams slugs:", slugs);
  return getPostSlugs().map(slug => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
  if (!slug) {
    throw new Error("Missing slug param");
  }

  const { content, metadata } = await getPostBySlug(slug);

  return (
    <article className="prose prose-invert mx-auto px-6 py-12">
    <h1>{metadata.title}</h1>
    <p className="text-gray-500">
        {new Date(metadata.date).toLocaleDateString()}
    </p>
    {content}
    </article>
  );
}
