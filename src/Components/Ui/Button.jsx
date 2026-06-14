import { THEME } from "../../theme";

const variants = {
  primary: `${THEME.accentBtn} border border-transparent`,
  outline: `${THEME.accentBtnOutline} bg-transparent`,
};

const sizes = {
  md: "px-5 py-2.5 text-sm font-medium",
  lg: "px-6 py-3 text-sm sm:text-base font-medium",
};

export default function Button({
  children,
  variant = "primary",
  size = "lg",
  href,
  type = "button",
  className = "",
  ...props
}) {
  const base = `inline-flex items-center justify-center rounded-lg transition-colors duration-200 focus:ring-offset-2 focus:ring-offset-bg-base ${THEME.accentRing}`;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
