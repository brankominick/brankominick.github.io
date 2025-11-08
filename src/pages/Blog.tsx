import { useEffect, useState } from 'react';
import Container from "@components/Container";
import Card from "@components/Card";

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
    fetch('/posts/posts.json')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Failed to load posts", err));
  }, []);

  return (
    <div className="pt-16 flex flex-col align-items justify-center">
      <section id="top-content">
        <Container
          id="blog-container"
          title="Blog"
          color="bg-blue-300"
        >
          <p>
            Currently working on formatting for posts.
          </p>
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
