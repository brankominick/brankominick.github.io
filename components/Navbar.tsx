"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/#about-me" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed z-[1000] w-full h-14 bg-gray-600 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-400"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-gray-200 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Navigation links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-6`}
        >
          {navItems.map(({ name, href }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href.replace(/#.*$/, ""));

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block py-2 sm:py-0 ${
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-gray-200 hover:text-blue-300"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
