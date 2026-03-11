import Link from "next/link";

interface CardProps {
  title: string;
  excerpt: string;
  path: string;
  slug: string;
  img?: string;
}

export default function Card({
  title,
  excerpt,
  path,
  slug,
  img,
}: CardProps) {
  return (
    <Link
      href={`/${path}/${slug}`}
      className="group block h-full rounded-xl border border-gray-200 dark:border-gray-700
                 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
    >
      <div className="grid h-full grid-cols-[120px_1fr] gap-4 p-4">
        {/* Image */}
        <div className="relative h-24 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
          {img && (
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col overflow-hidden">
          <h2
            className="text-lg font-semibold text-gray-900 dark:text-gray-100
                       leading-tight line-clamp-2 group-hover:underline"
          >
            {title}
          </h2>

          <p
            className="mt-2 text-sm text-gray-600 dark:text-gray-400
                       line-clamp-3"
          >
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
