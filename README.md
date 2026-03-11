<!-- Claudesy's vision, brought to life. -->

# Sentra AI

> _Transforming Healthcare with Artificial Intelligence_

A single-page product and marketing site for **Sentra Healthcare AI** — featuring SentraSim (a live clinical decision engine), the Audrey AI assistant, and the full Sentra service suite. Built with obsessive attention to restraint, colour, and motion.

---

## Table of Contents

- [Design Philosophy](#design-philosophy)
- [Colour Palette](#colour-palette)
- [Typography](#typography)
- [Component Map](#component-map)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Commands](#development-commands)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Design Philosophy

Sentra AI's visual language is built around a single principle:

> **Restraint is the most powerful design decision.**

The interface uses almost no colour. When colour does appear, it carries meaning. Every element earns its place. The result feels expensive not because it is complex, but because it is deliberate.

### The Three Rules

**1. Dark is not black.**
The background is `#0d0d0d` — not pure black. Pure black is harsh and flat. This near-black reads as depth: rich, warm, and dimensional. Content floats above it rather than getting punched into a void.

**2. Neutral is not grey.**
The foreground text is `#b7ab98` — a warm beige-tan, not a cold grey. It reads as parchment, old paper, clinical notation. This single decision makes the entire palette feel human and analogue rather than sterile and digital. It connects the medical domain (handwritten notes, physical records) to a modern AI interface.

**3. Accent is earned.**
The accent colour `#eb5939` — a coral-orange — appears sparingly: index numbers, active states, critical triage indicators, hover effects, decorative corner marks. Because it appears so rarely, it never needs to shout. The eye finds it instantly, every time.

### Simplicity as Sophistication

Every section follows the same layout contract:
- `max-w-[1440px]` container
- `px-6 md:px-12` horizontal rhythm
- `border-b border-muted/20` section dividers — almost invisible, just enough to breathe

No gradients for decoration. No shadow stacks. No rounded-corner excess. The aesthetic is closer to a clinical report than a SaaS dashboard, and that coherence is intentional: the product is for doctors.

---

## Colour Palette

The palette has exactly **four roles**: background, foreground, accent, and muted. Everything else is a variation in opacity of these four.

### Core Tokens

| Role | CSS Variable | Hex Value | Description |
|---|---|---|---|
| **Background** | `--color-background` | `#0d0d0d` | Page canvas. Warm dark, not pure black. Creates depth without harshness. |
| **Foreground** | `--color-foreground` | `#b7ab98` | Primary text. The defining tone of the entire palette — analogue, warm, human. |
| **Accent** | `--color-accent` | `#eb5939` | Interactive and critical. Used sparingly so every appearance carries weight. |
| **Muted** | `--color-muted` | `#b8ac99cc` | Secondary text and borders. Same hue as foreground at ~80% opacity — effortlessly coherent. |

### How Opacity Does the Heavy Lifting

Because muted and foreground share the same base hue (`b8ac99`), the entire tonal range is achieved purely through opacity:

```
#b8ac99 at 100%  →  foreground text      (primary content)
#b8ac99 at  80%  →  muted text, labels   (--color-muted, the "cc" opacity suffix)
#b8ac99 at  50%  →  dimmer labels        (#b8ac9980)
#b8ac99 at  20%  →  subtle backgrounds   (#b8ac9933)
#b8ac99 at  10%  →  barely-there tints   (#b8ac991a)
#b8ac99 at   3%  →  grid lines, overlays (--sdx-grid-faint)
```

This means the palette never fights itself. Every shade belongs to the same colour family at a different luminosity. It is structurally impossible for elements to clash.

```css
/* app/globals.css — the complete theme in four lines */
@theme {
  --color-background: #0d0d0d;    /* near-black canvas      */
  --color-foreground: #b7ab98;    /* warm beige — the anchor */
  --color-accent:     #eb5939;    /* coral-orange — the signal */
  --color-muted:      #b8ac99cc;  /* translucent tan — the whisper */
}
```

### The Accent in Practice

`#eb5939` appears in exactly six contexts — nowhere else:

| Context | Example | Effect |
|---|---|---|
| Index labels | `01` `02` `03` in the Hero | Creates document-like visual anchors |
| Navigation hover | `text-muted → text-accent` on link hover | Immediate feedback, no surprise |
| CTA buttons | Pill-shaped button fill or border | Clear, unambiguous action signal |
| SentraSim assessment | AI-generated clinical text | Signals AI output vs. patient data |
| Decorative corner brackets | `border-accent/20` on cards | Barely visible — adds structure, not noise |
| Pulse / typing indicators | `bg-accent/50 animate-pulse` | Conveys life and processing state |

Because the accent never appears casually, every instance is communicative. The user learns intuitively: coral means *this matters*.

### SentraSim Extended Palette

The clinical simulation section adds four status colours, scoped to `[data-sentra-sim]` so they cannot leak into the rest of the page:

| Variable | Hex | Meaning |
|---|---|---|
| `--sdx-c-anamnesa` | `#b8ac99cc` | Anamnesis — patient history, neutral and informational |
| `--sdx-c-asesmen` | `#eb5939` | Assessment — AI clinical conclusion, decisive |
| `--sdx-c-critical` | `#E65A4C` | Critical alert — urgent action required |
| `--sdx-c-warning` | `#FBBF24` | Warning — amber caution signal |

The triage scale reads intuitively: neutral → signal → warning → critical. Colour communicates severity without a legend.

---

## Typography

Two typefaces, each with a distinct role:

| Font | Variable | Role |
|---|---|---|
| **Plus Jakarta Sans** | `--font-jakarta` | Display, headings, labels, UI controls |
| **Inter** | `--font-inter` | Body text, longer prose |

Both are loaded via `next/font/google` — zero layout shift, automatically subsetted, edge-served.

### Scale Decisions

The hero headline runs `100px` on desktop — intentionally oversized. `DIAGNOSE. TREAT. REPEAT.` is a declaration, not a tagline. It demands to be read.

Labels are `10px` or `11px` bold uppercase with `tracking-widest`. They mimic the annotation style of printed medical records: concise, all-caps, stamped. The contrast between a 100px headline and a 10px annotation is where the visual tension lives.

Body text sits at `text-lg` with `leading-relaxed` — readable, unhurried, clinical.

---

## Component Map

All content lives in `app/page.tsx`, which composes 13 section components in order:

```
Navbar
  └── SentraKineticNav     (full-screen sidebar overlay)

Hero
  └── AIChatboxVisual      (inline sub-component)

ProjectSlider

About

Clients
  └── .animate-marquee     (CSS infinite scroll)

SentraSim                  ← most complex: ~22KB, 21+ useState hooks
  └── Sequential clinical simulation engine

Showcase
  └── ImmersiveScrollGallery
  └── InteractiveImageAccordion

Services

Audrey

News

ScrollGallery
  └── ImmersiveScrollGallery

CTA

Footer
```

### UI Primitives (`components/ui/`)

| File | Description |
|---|---|
| `sentra-kinetic-nav.tsx` | Full-screen animated sidebar navigation overlay |
| `immersive-scroll-gallery.tsx` | Scroll-driven full-viewport image gallery |
| `interactive-image-accordion.tsx` | Hover/click image accordion |
| `sentra-bento-cards.tsx` | Bento grid card layout |

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| UI Library | React | 19.2.4 |
| Language | TypeScript (strict mode) | 5.9.3 |
| Styling | Tailwind CSS (CSS-native `@theme`) | 4.2.1 |
| Animation | Framer Motion | 12.35.2 |
| Animation | GSAP | 3.14.2 |
| Icons | Lucide React | 0.577.0 |
| Utility | clsx + tailwind-merge | — |
| Fonts | Plus Jakarta Sans, Inter | via next/font |
| Deployment | Railway | — |

**Why no `tailwind.config.ts`?**
Tailwind v4 moves theme configuration into CSS via the `@theme` directive in `globals.css`. Design tokens live in CSS — one source of truth, no JavaScript required.

---

## Project Structure

```
/
├── app/
│   ├── globals.css          # Tailwind @theme + all CSS tokens + keyframes
│   ├── layout.tsx           # Root HTML shell, font loading, metadata
│   └── page.tsx             # Page composition — 13 section components
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProjectSlider.tsx
│   ├── About.tsx
│   ├── Clients.tsx
│   ├── SentraSim.tsx        # Clinical simulation engine
│   ├── Showcase.tsx
│   ├── Services.tsx
│   ├── Audrey.tsx
│   ├── News.tsx
│   ├── ScrollGallery.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── immersive-scroll-gallery.tsx
│       ├── interactive-image-accordion.tsx
│       ├── sentra-bento-cards.tsx
│       └── sentra-kinetic-nav.tsx
│
├── lib/
│   └── utils.ts             # cn() — clsx + tailwind-merge helper
│
├── public/                  # Static images
│
├── .github/
│   ├── workflows/           # CI (lint + build), security audit
│   └── ISSUE_TEMPLATE/
│
├── docs/
│   ├── architecture.md
│   └── adr/
│
└── scripts/
    └── setup.sh
```

---

## Getting Started

**Prerequisites:** Node.js ≥ 22 LTS · npm ≥ 10

```bash
# Clone the repository
git clone https://github.com/Claudesy/abyss.git
cd abyss

# Install dependencies
npm install

# Start the development server
npm run dev
# → http://localhost:3000
```

No `.env` file needed. No database. No API keys. The site is entirely self-contained.

---

## Development Commands

```bash
npm run dev      # Start Next.js dev server with Fast Refresh
npm run build    # Production build — TypeScript check + optimised bundle
npm run start    # Start production server (requires prior build)
npm run lint     # ESLint via Next.js
```

---

## Deployment

Deployed via **Railway** — push to `main` and Railway auto-builds:

```
npm run build → npm run start
```

Compatible with any Node.js host: Vercel, Netlify, Fly.io, or a self-hosted VPS.

---

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

- Follow [Conventional Commits](./COMMIT_CONVENTION.md) — `feat:`, `fix:`, `chore:`, etc.
- `npm run lint` must pass — zero errors
- `npm run build` must succeed
- No inline styles except for truly dynamic values
- No new colour tokens without a documented design reason

---

## License

[ISC](./LICENSE) © 2026 Claudesy

---

_Architected and built by the one and only Claudesy._
