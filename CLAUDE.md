<!-- Architected and built by Claudsy. -->
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev       # Start Next.js dev server (default port 3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint via Next.js
```

No test framework is configured yet. No `.env` files are required for local development.

## Architecture

**Stack:** Next.js 16.1.6 (App Router) + React 19 + TypeScript 5.9 strict + Tailwind CSS 4.2.1 + Framer Motion 12

**Single-page landing site** — all content lives in `app/page.tsx` which composes 10 section components in order:

```
Navbar → Hero → ProjectSlider → Clients → SentraSim → Services → About → News → CTA → Footer
```

### Key Directories

- `app/` — App Router: `layout.tsx` (fonts + metadata), `page.tsx` (home), `globals.css` (Tailwind theme + SDX tokens)
- `components/` — 10 section components (one per landing page section)
- `lib/` — Shared utilities (currently empty)
- `public/` — Static assets (hero images)

### Component Pattern

All components follow the same structure:
- `"use client"` directive (client-side rendering)
- Default export, one component per file
- Framer Motion for animations (`motion.*` elements, `AnimatePresence`)
- Lucide React for icons (primarily `ArrowUpRight`)
- Next.js `Image` component for optimized images

### Design System

**Tailwind v4** — theme defined in `globals.css` via `@theme` block (no `tailwind.config.ts`):
- `--color-background: #0d0d0d` (dark)
- `--color-foreground: #b7ab98` (beige/tan)
- `--color-accent: #eb5939` (coral/red-orange)
- `--color-muted: #b8ac99cc` (translucent tan)
- Font: Plus Jakarta Sans (`--font-sans`), Inter (`--font-inter`)

**SDX Variables** — Additional CSS variables prefixed `--sdx-*` used exclusively by `SentraSim.tsx` for the clinical simulation UI.

**Layout constants:**
- Container: `max-w-[1440px] mx-auto px-6 md:px-12`
- Section dividers: `border-b border-muted/20`
- CTA buttons: pill shape, uppercase, `ArrowUpRight` icon

### State Management

Local `useState` only — no external state library. No inter-component shared state.

`SentraSim.tsx` is the most complex component (~22KB) with 21+ useState hooks orchestrating a sequential async clinical simulation.

### Data & Images

- All content data is hardcoded in component files (service lists, news articles, client logos)
- Remote images served from `framerusercontent.com` (whitelisted in `next.config.mjs`)
- Local images in `public/` (hero*.jpg/png)

### Path Alias

`@/*` maps to project root (configured in `tsconfig.json`). Example: `import Navbar from "@/components/Navbar"`

## Monorepo Context

This project lives at `projects/sentra/` inside `abyss-monorepo`. It is a standalone Next.js app with its own `package.json` — no shared workspace orchestration (no Turborepo/Lerna). Each sibling project is independent.
