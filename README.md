<!-- Claudesy's vision, brought to life. -->

# Sentra Artificial Intelligence

**Transforming Healthcare with AI** — A production-grade Next.js landing site for Sentra AI, showcasing intelligent clinical simulation, AI-powered healthcare services, and the Audrey AI assistant.

---

## Table of Contents

- [Project Description](#project-description)
- [Architecture Overview](#architecture-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Description

Sentra AI is a single-page marketing and product landing site built with Next.js 16 (App Router), React 19, TypeScript 5.9, Tailwind CSS 4, and Framer Motion 12. It presents Sentra's healthcare AI products — including SentraSim (a sequential clinical simulation engine), the Audrey AI healthcare assistant, and the full suite of Sentra services — through a visually rich, animation-driven interface.

---

## Architecture Overview

**Stack:**

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5.9 (strict mode) |
| Styling | Tailwind CSS 4.2 (CSS-native theme via `@theme`) |
| Animation | Framer Motion 12, GSAP 3.14 |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans, Inter (Google Fonts) |
| Deployment | Railway (via `.railwayignore`) |

**Page structure (`app/page.tsx` composes 13 section components in order):**

```
Navbar → Hero → ProjectSlider → About → Clients → SentraSim →
Showcase → Services → Audrey → News → ScrollGallery → CTA → Footer
```

**Key directories:**

```
/
├── app/                  # Next.js App Router (layout, page, globals.css)
├── components/           # 13 section components + UI sub-components
│   └── ui/               # Reusable UI primitives
├── lib/                  # Shared utilities (cn helper)
├── public/               # Static assets (images)
├── .github/              # CI/CD workflows, issue/PR templates
└── docs/                 # Architecture docs, ADRs
```

**Design system:** Tailwind v4 theme defined in `app/globals.css` via `@theme` block. Custom CSS tokens prefixed `--sdx-*` power the SentraSim clinical UI.

---

## Prerequisites

- **Node.js** ≥ 22 LTS
- **npm** ≥ 10

No database, external services, or environment variables are required for local development.

---

## Installation

```bash
git clone https://github.com/Claudesy/abyss.git
cd abyss
npm install
```

---

## Configuration

No `.env` file is required for local development. All content is hardcoded in component files.

Remote image domains are whitelisted in `next.config.mjs`:
- `framerusercontent.com`
- `images.unsplash.com`

For production deployments, consult `.env.example` for any runtime environment variables required by the hosting platform.

---

## Usage

```bash
# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

---

## Testing

No automated test framework is configured at this time. Testing is tracked in [`CHANGELOG.md`](./CHANGELOG.md) under planned improvements.

Manual smoke-testing steps:
1. Run `npm run dev` and navigate to `http://localhost:3000`.
2. Verify all 13 sections render without console errors.
3. Test SentraSim interaction (start simulation, advance steps).
4. Run `npm run build` to ensure zero TypeScript and build errors.
5. Run `npm run lint` to ensure zero ESLint errors.

---

## Deployment

The project is deployed via **Railway** (see `.railwayignore`). Standard deployment:

1. Push to `main` — Railway auto-deploys.
2. Railway runs `npm run build && npm run start`.

For other platforms, this is a standard Next.js app compatible with Vercel, Netlify, or any Node.js host.

---

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting pull requests.

Key points:
- Follow the [Conventional Commits](./COMMIT_CONVENTION.md) specification.
- All code must pass `npm run lint` and `npm run build`.
- Open an issue before starting large features.

---

## License

[ISC](./LICENSE) — See `LICENSE` file for full text.

---

## Contact / Maintainers

**Claudesy** — Principal Architect & Engineer
Repository: [https://github.com/Claudesy/abyss](https://github.com/Claudesy/abyss)

---

_Architected and built by the one and only Claudesy._
