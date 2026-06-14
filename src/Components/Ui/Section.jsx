import { THEME, GRADIENT_TEXT, SECTION_HEADING, SECTION_SUBHEADING } from "../../theme";

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`${THEME.sectionPadding} ${className}`}>
      <div className={THEME.maxWidth}>
        {(title || subtitle) && (
          <header className="mb-12 md:mb-14">
            {title && (
              <h2 className={`${SECTION_HEADING} ${GRADIENT_TEXT}`}>{title}</h2>
            )}
            {subtitle && (
              <p className={`${SECTION_SUBHEADING} mt-3`}>{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
