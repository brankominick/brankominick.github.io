import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

interface PostData {
  title: string;
  date: string;
  content: string;
}

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    if (!slug) return;

    // In Vite, use import.meta.env.BASE_URL instead of process.env.PUBLIC_URL
    const postUrl = `${import.meta.env.BASE_URL}posts/${slug}.md`;

    fetch(postUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Post not found");
        return res.text();
      })
      .then((text) => {
        const { data, content } = matter(text);
        setPost({
          title: data.title || slug,
          date: data.date || "",
          content,
        });
      })
      .catch(() => {
        setPost({
          title: "Not found",
          date: "",
          content: "This post does not exist or failed to load.",
        });
      });
  }, [slug]);

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 prose max-w-none">
      <h1>{post.title}</h1>
      {post.date && (
        <p>
          <small>{post.date}</small>
        </p>
      )}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}
