// src/components/Card.tsx
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  excerpt: string;
  path: string;
  slug: string;
  img?: string;
}

export default function Card({ title, excerpt, path, slug, img }: CardProps) {
  return (
    <Link to={`/${path}/${slug}`} className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition mb-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4">
          <img src={img} alt="Project Picture" className=""/>
        </div>
        <div className="bg-gray-50 p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
