import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

    const postUrl = `${window.location.origin}/posts/${slug}.html`;

    fetch(postUrl)
    .then((res) => {
      console.log(res.status);
      return res.text();
    })
    .then((text) => {
      const doc = new DOMParser().parseFromString(text, "text/html");

      const metaTag = doc.getElementById("post-meta");
      const meta = metaTag ? JSON.parse(metaTag.textContent || "{}") : {};

      const content = doc.querySelector(".post-content")?.innerHTML || "";
      setPost({
        title: meta.title,
        date: meta.date,
        content: content,
      });
    })
    .catch((err) => {
      console.error("Error loading post:", err);
      setPost({
        title: "Not found",
        date: "",
        content: "This post does not exist or failed to load.",
      });
    });
  }, [slug]);

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="pt-16">
      <h1>{post.title}</h1>
      {post.date && (
        <p>
          <small>{post.date}</small>
        </p>
      )}
      <div
        className="pt-16 p-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
