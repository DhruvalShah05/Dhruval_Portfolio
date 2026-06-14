import { NAV_LINKS } from "../../data/portfolio";
import ResumeButton from "../Ui/ResumeButton";
import { THEME } from "../../theme";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  if (!menuOpen) return null;

  return (
    <div className={`fixed inset-0 z-40 md:hidden ${THEME.bgMobileMenuOverlay} pt-16`}>
      <nav className="flex flex-col items-center justify-center gap-8 min-h-[calc(100vh-4rem)]">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-medium ${THEME.linkPrimary}`}
          >
            {link.label}
          </a>
        ))}
        <div onClick={() => setMenuOpen(false)}>
          <ResumeButton size="lg">Resume</ResumeButton>
        </div>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-accent text-lg font-medium"
        >
          Get in touch
        </a>
      </nav>
    </div>
  );
}
