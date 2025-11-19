import { useEffect, useState, JSX } from 'react';
import Container from "@components/Container";
import Card from "@components/Card";

type MDXModule = {
  metadata: {
    title: string;
    excerpt: string;
    date: string;
    img?: string;
    slug?: string; 
  };
  default: (props: Record<string, unknown>) => JSX.Element;
};

const postModules = import.meta.glob('../posts/*.mdx') as Record<string, () => Promise<MDXModule>>;

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  img?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const entries: PostMeta[] = await Promise.all(
        Object.entries(postModules).map(async ([path, loader]) => {
          const slug = path.split('/').pop()?.replace(/\.mdx$/, '') ?? '';
          const mod = await loader();
          return { slug, ...mod.metadata }; 
        })
      );

      entries.sort((a, b) => (a.date < b.date ? 1 : -1));

      setPosts(entries);
    };

    loadPosts();
  }, []);

  return (
    <div className="pt-16 flex flex-col items-center justify-center">
      <section id="top-content">
        <Container
          id="blog-container"
          title="Blog"
          color="bg-blue-300"
        >
          <p>Currently working on formatting for posts.</p>
        </Container>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts yet.</p>
        ) : (
          posts.map((p) => (
            <Card
              key={p.slug}
              title={p.title}
              excerpt={p.excerpt}
              path="blog"
              slug={p.slug}
              img={p.img || "logo512.png"}
            />
          ))
        )}
      </div>
    </div>
  );
}
