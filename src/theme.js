
export const colors = {
  bgBase: "#080C10", // Deep midnight ocean
  surface: "#0E1620", // Dark navy surface
  border: "#102030", // Deep blue-slate border
  textPrimary: "#E0ECF5", // Cool blue-white
  textMuted: "#6A92B4", // Muted steel blue
  accent: "#FBBF24", // Sunbeam Gold
  accentLight: "#FDE68A", // Pale golden yellow
  accentDark: "#D97706", // Deep amber gold
  secondary: "#38BDF8", // Sky Blue
  secondaryLight: "#7DD3FC", // Light sky
  secondaryDark: "#0284C7", // Deep ocean blue
};

export const THEME = {
  bgBase: "bg-bg-base",
  bgSurface: "bg-surface",
  bgGlass: "bg-surface/80 backdrop-blur-md",
  bgNavbarGlass: "bg-bg-base/80 backdrop-blur-md",
  bgMobileMenuOverlay: "bg-bg-base/95 backdrop-blur-sm",
  bgInput: "bg-surface border-border",

  accentMain: "text-accent",
  accentDim: "text-accent/70",
  accentBorder: "border-accent/30",
  accentHover: "hover:text-accent-light",
  accentBg: "bg-accent/10",
  accentBgHover: "hover:bg-accent/15",
  accentTag: "bg-accent/10 text-accent border border-accent/20",
  accentRing:
    "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60",
  accentBtn: "bg-accent hover:bg-accent-light text-bg-base",
  accentBtnOutline:
    "border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent",

  secondaryMain: "text-secondary",
  secondaryDim: "text-secondary/70",
  secondaryBorder: "border-secondary/30",
  secondaryTag: "bg-secondary/10 text-secondary border border-secondary/20",
  secondaryBtn: "bg-secondary hover:bg-secondary-light text-bg-base",
  secondaryBtnOutline:
    "border border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary",

  textPrimary: "text-text-primary",
  textSecondary: "text-text-muted",
  textMuted: "text-text-muted/80",
  textHeading: "text-text-primary",
  textBodyMuted: "text-text-muted leading-relaxed",
  textBodyMutedSm: "text-sm text-text-muted leading-relaxed",

  subheadingAccent: "text-sm font-semibold text-accent uppercase tracking-wide",
  overlineAccent: "text-accent text-sm font-medium tracking-wide uppercase",
  subheadingSecondary:
    "text-sm font-semibold text-secondary uppercase tracking-wide",

  borderDefault: "border-border",
  borderSubtle: "border-border/60",

  sectionPadding: "py-20 md:py-24 px-4 sm:px-6 lg:px-8",
  maxWidth: "max-w-content mx-auto w-full",

  fontSans: "font-sans",

  linkPrimary:
    "text-text-primary hover:text-accent transition-colors duration-200",
  linkSecondary:
    "text-text-muted hover:text-accent transition-colors duration-200",
  groupHoverAccentBorder: "group-hover:border-accent/30",
  cardHover:
    "hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-200",
  imgHoverZoom: "hover:scale-[1.02] transition-transform duration-300",
  transitionDefault: "transition-all duration-200",
};

export const GRADIENT_TEXT =
  "bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent";

export const GRADIENT_TEXT_COOL =
  "bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent";

export const GRADIENT_TEXT_MIXED =
  "bg-gradient-to-r from-accent via-accent-light to-secondary bg-clip-text text-transparent";

export const SECTION_HEADING =
  "text-3xl sm:text-4xl font-bold tracking-tight text-text-primary";

export const SECTION_SUBHEADING =
  "text-text-muted text-base sm:text-lg max-w-2xl";
