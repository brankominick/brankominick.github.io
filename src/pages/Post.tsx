import { useParams } from "react-router-dom";
import { useEffect, useState, JSX } from "react";
import remarkGfm from "remark-gfm";

const components = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => <h2 className="text-3xl font-semibold mt-6 mb-3" {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => <h3 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
  p:  (props: React.ComponentPropsWithoutRef<"p">) => <p className="mb-4 leading-relaxed" {...props} />,

  img: (props: React.ComponentPropsWithoutRef<"img">) => (
    <img {...props} className="my-6 rounded-lg shadow-lg mx-auto" />
  ),

  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a {...props} className="text-blue-600 underline hover:text-blue-800" />
  ),

  ul: (props: React.ComponentPropsWithoutRef<"ul">) => <ul {...props} className="list-disc ml-6 mb-4" />,
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => <ol {...props} className="list-decimal ml-6 mb-4" />,

  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      {...props}
      className="my-6 p-6 bg-gray-200 rounded-xl overflow-x-auto"
    />
  ),

  blockquote: (props: React.ComponentPropsWithoutRef<"code">) => (
    <div className="my-4 p-6 bg-gray-200 rounded-xl">
      <code {...props} className="block" />
    </div>
  ),

  math: (props: any) => (
    <span
      {...props}
      className="px-1 py-0.5 bg-gray-200 rounded text-lg font-mono"
    />
  ),
  "math.display": (props: any) => (
    <div
      {...props}
      className="my-6 p-4 bg-gray-200 rounded-lg text-xl font-mono overflow-x-auto"
    />
  ),
};

type MDXModule = {
  default: (props?: Record<string, unknown>) => JSX.Element;
};

const posts = import.meta.glob("../posts/*.mdx") as Record<
  string,
  () => Promise<MDXModule>
>;

export default function Post() {
  const { slug } = useParams();
  const [MDX, setMDX] = useState<MDXModule["default"] | null>(null);

  useEffect(() => {
    if (!slug) return;

    const path = `../posts/${slug}.mdx`;
    const loader = posts[path];

    if (!loader) {
      setMDX(() => () => <p>Post not found.</p>);
      return;
    }

    loader().then((mod) => setMDX(() => mod.default));
  }, [slug]);

  if (!MDX) return <p className="pt-14">Loading...</p>;

  return (
    <div className="pt-14 pl-6 pr-6">
      <MDX components={components} remarkPlugins={[remarkGfm]}/>
    </div>
  );
}
