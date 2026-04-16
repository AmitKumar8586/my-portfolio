import { useState } from "react";

function Head() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center border-b border-gray-300 px-4 py-3 font-mono">
      {/* Logo */}
      <h1 className="text-xl sm:text-2xl md:text-3xl">
        #CodeWith<span className="text-blue-500">Amit</span>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-gray-500">
        <a className="hover:text-blue-500 duration-300" href="/">
          Home
        </a>
        <a className="hover:text-blue-500 duration-300" href="/about">
          About
        </a>
        <a className="hover:text-blue-500 duration-300" href="/contact">
          Contact
        </a>
        <a className="hover:text-blue-500 duration-300" href="/project">
          Projects
        </a>
      </nav>

      {/* Right Buttons */}
      <div className="flex items-center space-x-2">
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          <i className="ri-moon-line"></i>
        </button>

        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          <i className="ri-phone-line"></i>
        </button>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i class="ri-menu-line"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-300 flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/project">Projects</a>
        </div>
      )}
    </header>
  );
}

export default Head;
