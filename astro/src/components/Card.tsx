// src/components/Card.tsx

interface CardProps {
  title: string;
  excerpt: string;
  path: string;
  slug: string;
  img?: string;
}

export default function Card({ title, excerpt, path, slug, img }: CardProps) {
  return (
    <a
      href={`/${path}/${slug}`}
      className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition mb-4"
    >
      ...
    </a>
  );
}
