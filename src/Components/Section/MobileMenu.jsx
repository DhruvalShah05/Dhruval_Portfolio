import React from "react";

function MobileMenu({ menuOpen, setmenuOpen }) {
  return (
    <div className={`fixed inset-0 z-40 bg-black bg-opacity-90 text-gray-100 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      {/* Close Icon */}
      <div
        className="absolute top-6 right-6 text-white text-4xl cursor-pointer hover:text-blue-400 transition-colors"
        onClick={() => setmenuOpen(false)}
      >
        &times;
      </div>

      {/* Links */}
      <div className="flex flex-col items-center space-y-8">
        {["home", "about", "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setmenuOpen(false)}
            className={`text-2xl sm:text-3xl font-semibold text-white hover:text-blue-400 transition-colors transform transition duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
            style={{ transitionDelay: menuOpen ? `${0.1 * ["home", "about", "projects", "contact"].indexOf(section)}s` : "0s" }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;