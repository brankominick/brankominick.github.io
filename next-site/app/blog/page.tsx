import { getAllPosts, type PostMeta } from "@/src/lib/posts";
import Card from "@/components/Card";

export const dynamic = "force-static";

export default function BlogIndex() {
  const posts: PostMeta[] = getAllPosts();

  return (
    <main className="max-w-5xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Card
              key={p.slug}
              title={p.title}
              excerpt={p.excerpt}
              path="blog"
              slug={p.slug}
              img={p.img || "logo512.png"}
            />
          ))}
        </div>
      )}
    </main>
  );
}
