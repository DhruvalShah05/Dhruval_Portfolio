import React, { useEffect } from 'react';

function Navbar({ menuOpen, setmenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-white"
          >
            Dhruval's <span className="text-blue-400">Portfolio</span>
          </a>

          {/* Hamburger Menu (Mobile only) */}
          <div
            className="w-7 h-5 z-40 lg:hidden cursor-pointer text-white text-2xl"
            onClick={() => setmenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Nav Links */}
          <div className="md:hidden lg:flex items-center space-x-4 lg:space-x-10">
            <a
              href="#home"
              className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/Dhruval_Resume.pdf"
              download="Dhruval_Resume.pdf"
              className="text-sm lg:text-base bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded hover:shadow-lg transition-all duration-300"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
