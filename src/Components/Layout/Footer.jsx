import { FiCode, FiGithub, FiLinkedin } from "react-icons/fi";
import { SITE } from "../../data/portfolio";
import { THEME } from "../../theme";

export default function Footer() {
  return (
    <footer className={`border-t ${THEME.borderDefault} py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className={`text-sm ${THEME.textSecondary}`}>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={THEME.linkSecondary}
          >
            <FiGithub size={20} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={THEME.linkSecondary}
          >
            <FiLinkedin size={20} />
          </a>
          {SITE.codolio && (
            <a
              href={SITE.codolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codolio"
              className={THEME.linkSecondary}
            >
              <FiCode size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
