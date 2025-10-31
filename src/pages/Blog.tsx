import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from "@components/Container";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
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
            Coming soon!
          </p>
        </Container>
      </section>
      <ul>
        {posts.map(p => (
          <li key={p.slug}>
            <Link to={`/blog/${p.slug}`}>{p.title}</Link> <small>({p.date})</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
