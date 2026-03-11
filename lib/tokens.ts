// Sentra Healthcare AI — Design Tokens
// Source of truth for all visual design decisions.

// ─── COLOR PALETTE ───────────────────────────────────────────────

export const color = {
  // Core
  background: "#0d0d0d",
  foreground: "#b7ab98",
  accent: "#eb5939",
  muted: "#b8ac99",
  white: "#ffffff",

  // Muted Opacity Variants
  mutedHalf: "#b8ac9980",       // 50%
  mutedText: "#b8ac99cc",       // 80% — primary muted text
  mutedFaint: "#b8ac991a",      // 10%
  mutedSubtle: "#b8ac9933",     // 20%
  mutedLine: "#b8ac9940",       // 25% — grid lines

  // Canvas (elevated surfaces)
  canvas: "#1C1B1A",
  canvasDark: "#141311",
  panelLayer1: "#111110",
  panelLayer2: "#17160f",
  panelLayer3: "#1c1b17",

  // Semantic
  critical: "#E65A4C",
  warning: "#FBBF24",

  // Audrey AI Identity
  audrey: {
    amber: "#C4956A",
    amberMuted: "#C4956A80",     // 50%
    amberFaint: "#C4956A15",     // ~8%
    amberGlow: "#C4956A08",      // ~3%
    teal: "#6B9B8A",
    tealFaint: "#6B9B8A18",      // ~9%
    bubbleBg: "#F2EBE0",
    bubbleText: "#1a1510",
  },
} as const;

// ─── TYPOGRAPHY ──────────────────────────────────────────────────

export const font = {
  family: {
    heading: "Plus Jakarta Sans",
    body: "Inter",
    sans: "var(--font-jakarta), ui-sans-serif, system-ui, sans-serif",
    inter: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
  },

  size: {
    // Micro
    "2xs": "9px",
    xs: "10px",
    sm: "11px",

    // Body
    body: "0.875rem",    // 14px — text-sm
    base: "1rem",        // 16px
    lg: "1.125rem",      // 18px — paragraphs

    // Headings
    xl: "1.25rem",       // 20px — sub-headings
    "2xl": "1.5rem",     // 24px
    "3xl": "1.875rem",   // 30px
    "4xl": "2.25rem",    // 36px
    "5xl": "3rem",       // 48px

    // Display
    sectionMobile: "32px",
    sectionDesktop: "45px",
    ctaDesktop: "56px",
    heroMobile: "40px",
    heroTablet: "80px",
    heroDesktop: "100px",
    kineticNav: "clamp(2.5rem, 5vw, 4rem)",
  },

  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },

  tracking: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.04em",
    wider: "0.05em",
    widest: "0.1em",
    ultraWide: "0.15em",
    extreme: "0.2em",
    maxWide: "0.25em",
  },

  leading: {
    none: 1,
    tight: 1.1,
    snug: 1.2,
    nav: 1.15,
    normal: 1.375,
    relaxed: 1.625,
    loose: 1.7,
  },
} as const;

// ─── SPACING ─────────────────────────────────────────────────────

export const spacing = {
  // Section Vertical Rhythm
  sectionPadding: {
    sm: "py-20",         // 80px — compact sections
    md: "py-24",         // 96px — standard sections
    lg: "py-32",         // 128px — featured sections
    hero: "pt-32 pb-20", // hero asymmetric
  },

  // Container
  container: {
    maxWidth: "1440px",
    paddingX: "px-6 md:px-12",
  },

  // Common gaps
  gap: {
    xs: "gap-1",
    sm: "gap-3",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
    "2xl": "gap-16",
    "3xl": "gap-20",
  },
} as const;

// ─── BORDERS ─────────────────────────────────────────────────────

export const border = {
  color: {
    section: "border-muted/20",
    subtle: "border-muted/10",
    faint: "border-muted/5",
    accent: "border-accent",
    accentSubtle: "border-accent/15",
  },

  radius: {
    none: "0",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
} as const;

// ─── EFFECTS ─────────────────────────────────────────────────────

export const effect = {
  shadow: {
    card: "8px 8px 20px #050505, -8px -8px 20px #1a1a1a, inset 0 1px 0 rgba(255,255,255,0.02)",
    elevated: "6px 6px 16px #050505, -6px -6px 16px #1a1a1a",
    subtle: "3px 3px 8px #050505, -2px -2px 6px #2a2a2a",
    glowAccent: "0 0 32px rgba(235,89,57,0.4)",
    glowAccentStrong: "0 0 32px rgba(235,89,57,0.5)",
  },

  blur: {
    nav: "backdrop-blur-md",
    ambient: "120px",
    ambientSm: "100px",
    soft: "blur-3xl",
  },

  overlay: {
    dark: "bg-black/65",
    medium: "bg-black/50",
    light: "bg-black/30",
    nav: "bg-background/80",
  },
} as const;

// ─── ANIMATION ───────────────────────────────────────────────────

export const animation = {
  duration: {
    fast: 300,
    normal: 500,
    slow: 700,
    slower: 1000,
  },

  ease: {
    smooth: [0.16, 1, 0.3, 1],
    default: "easeInOut",
    gsapDefault: "power2.out",
    gsapBounce: "back.out(1.7)",
    gsapIn: "power2.in",
  },

  stagger: {
    fast: 0.04,
    normal: 0.06,
    slow: 0.08,
    backdrop: 0.12,
  },

  marquee: "40s linear infinite",
} as const;

// ─── LAYOUT ──────────────────────────────────────────────────────

export const layout = {
  maxWidth: {
    container: "1440px",
    content: "900px",
    heading: "800px",
    paragraph: "600px",
    quote: "550px",
    sidebar: "420px",
    nav: "560px",
  },

  grid: {
    about: "lg:grid-cols-[1fr_auto_1fr]",
    hero: "lg:grid-cols-[1fr_420px]",
    audrey: "lg:grid-cols-[1fr_380px]",
    sim: "lg:grid-cols-[800px_1fr]",
    footer: "md:grid-cols-2 lg:grid-cols-4",
  },

  zIndex: {
    nav: 50,
    kineticNav: 100,
  },
} as const;

// ─── EXPORT ALL ──────────────────────────────────────────────────

const tokens = {
  color,
  font,
  spacing,
  border,
  effect,
  animation,
  layout,
} as const;

export default tokens;
