import { THEME } from "../../theme";

export default function Card({ children, className = "", hover = true, ...props }) {
  const hoverStyles = hover ? THEME.cardHover : "";

  return (
    <div
      className={`rounded-xl border ${THEME.borderDefault} ${THEME.bgSurface} p-6 ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
