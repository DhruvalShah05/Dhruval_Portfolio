import { useEffect } from "react";
import { NAV_LINKS, SITE } from "../../data/portfolio";
import ResumeButton from "../Ui/ResumeButton";
import { THEME } from "../../theme";

export default function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 border-b ${THEME.borderDefault} ${THEME.bgNavbarGlass}`}>
      <nav className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className={`text-sm font-semibold ${THEME.linkPrimary}`}
        >
          {SITE.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm ${THEME.linkSecondary}`}
            >
              {link.label}
            </a>
          ))}
          <ResumeButton />
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-text-primary"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>
    </header>
  );
}
