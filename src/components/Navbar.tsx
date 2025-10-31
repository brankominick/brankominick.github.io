import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/#about-me" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed z-[1000] w-full h-14 bg-gray-600 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Home
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-6 text-gray-700 dark:text-gray-200`}
        >
          {navItems.map(({ name, path }) => {
            const isHash = path.includes("#");
            const isActive = location.pathname === path;
            const LinkComponent = isHash ? HashLink : Link;

            return (
              <LinkComponent
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={`block py-2 sm:py-0 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "hover:text-blue-500"
                }`}
              >
                {name}
              </LinkComponent>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
