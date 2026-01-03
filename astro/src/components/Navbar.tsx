export default function Navbar() {
  return (
    <nav className="fixed z-[1000] w-full h-14 bg-gray-600 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-400">
          Home
        </a>

        <div className="flex space-x-6 text-gray-200">
          <a href="/#about-me" className="hover:text-blue-400">
            About
          </a>
          <a href="/blog" className="hover:text-blue-400">
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}
