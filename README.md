</div>
<div align="center">

<img src="public/hero.jpg" alt="Sentra AI — PKM Dashboard" width="100%" style="border-radius:12px;" />

# ✦ Sentra AI

### *Intelligent Healthcare Infrastructure for Indonesian Puskesmas*

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-BB4BFF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Railway](https://img.shields.io/badge/Deployed_on-Railway-0B0D0E?style=flat-square&logo=railway)](https://railway.app/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](./LICENSE)

<br/>

> *"Our technology exists for one purpose only: to honor the sacrifice of healthcare workers by giving them better tools than the problems they face."*
> — **Claudesy**, Principal Architect

<br/>

**[Live Demo](https://github.com/Claudesy/abyss)** · **[Report Bug](https://github.com/Claudesy/abyss/issues)** · **[Request Feature](https://github.com/Claudesy/abyss/issues)**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Product Suite](#-product-suite)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Page Structure](#-page-structure)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#️-configuration)
- [Usage](#-usage)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**Sentra AI** is a production-grade marketing and product landing site that showcases intelligent healthcare infrastructure for Indonesian Community Health Centers (**Puskesmas / PKM**). Built with the latest web technologies, it presents Sentra's AI-powered product suite through a visually rich, animation-driven interface.

The platform bridges the gap between cutting-edge AI technology and frontline healthcare delivery — empowering doctors, nurses, and health administrators across Indonesia with tools built specifically for the national healthcare ecosystem (SATUSEHAT, BPJS P-Care, SIK Dinkes).

### Why Sentra AI?

| Challenge | Sentra Solution |
|-----------|-----------------|
| Manual, error-prone LB1 report submissions | **RPA Auto-Reporting** via Playwright |
| Fragmented staff identity across health systems | **Unified User Profiles** (SATUSEHAT + BPJS + SIK) |
| Slow, siloed inter-unit communication | **ACARS Real-Time Chat** with E2E encryption |
| Complex ICD-10 → INA-CBGs mapping for BPJS claims | **ICD-X Converter** with bulk validation |

---

## 🏥 Product Suite

### 1. 🤖 SentraSim — Sequential Clinical Simulation Engine
An interactive, AI-driven clinical simulation platform designed for medical staff training and decision-support. SentraSim walks users through branching patient scenarios, validating clinical reasoning at each step.

**Key capabilities:**
- Step-by-step clinical case simulation
- AI-powered diagnosis suggestion and feedback
- Customizable case libraries for Puskesmas workflows
- Performance tracking and competency scoring

### 2. 💬 Audrey — AI Healthcare Assistant
Audrey is Sentra's conversational AI assistant, purpose-built for the Indonesian healthcare context. She understands clinical terminology, local regulations, and Puskesmas-specific workflows.

**Key capabilities:**
- Natural language Q&A for clinical and administrative queries
- BPJS claim guidance and ICD code lookup
- Integration with Kemenkes RI data sources
- Bahasa Indonesia + medical terminology support

### 3. 📊 PKM Dashboard — Integrated Operations Center
A full-featured web dashboard consolidating all Puskesmas operations: reporting, staff management, inter-unit communication, and health system integrations.

**Modules:**
- **RPA Auto-Reporting** — Automated LB1 submission to e-Puskesmas
- **User Profile & Integration** — Role-based access (Dokter, Perawat, Admin, Kepala Puskesmas)
- **ACARS Chat System** — WebSocket-powered real-time messaging with audit logs
- **ICD-X Converter** — ICD-10 WHO to INA-CBGs/P-Care Indonesia code mapping

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        SENTRA AI PLATFORM                        │
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────────────────┐ │
│  │  Next.js 16 │  │  FastAPI    │  │   External Integrations  │ │
│  │  App Router │  │  Backend    │  │  ┌──────────────────────┐ │ │
│  │             │  │             │  │  │ SATUSEHAT (Kemenkes) │ │ │
│  │  13 Section │  │  PostgreSQL │  │  │ BPJS P-Care          │ │ │
│  │  Components │  │  + Prisma   │  │  │ SIK Dinkes           │ │ │
│  │             │  │             │  │  │ e-Puskesmas Portal   │ │ │
│  │  Framer     │  │  Redis      │  │  └──────────────────────┘ │ │
│  │  Motion +   │  │  Cache      │  └──────────────────────────┘ │
│  │  GSAP       │  │             │                                │
│  └─────────────┘  │  WebSocket  │  ┌──────────────────────────┐ │
│                   │  (ACARS)    │  │     Security Layer       │ │
│                   └─────────────┘  │  AES-256 Encryption      │ │
│                                    │  RBAC Enforcement        │ │
│                                    │  Audit Logging           │ │
│                                    │  Rate Limiting           │ │
│                                    └──────────────────────────┘ │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| **Framework** | Next.js (App Router) | 16.1 |
| **UI Library** | React | 19 |
| **Language** | TypeScript (strict mode) | 5.9 |
| **Styling** | Tailwind CSS (CSS-native `@theme`) | 4.2 |
| **Animation** | Framer Motion | 12 |
| **Animation** | GSAP | 3.14 |
| **Icons** | Lucide React | latest |
| **Fonts** | Plus Jakarta Sans, Inter | Google Fonts |
| **Backend** | FastAPI | latest |
| **Database** | PostgreSQL + Prisma ORM | latest |
| **Cache** | Redis | latest |
| **Auth** | NextAuth.js | latest |
| **E2E Testing** | Playwright | latest |
| **Real-time** | WebSocket | native |
| **Deployment** | Railway | — |

---

## 📄 Page Structure

The main page (`app/page.tsx`) is composed of **13 section components** rendered in sequence:

```
Navbar
  └── Hero                  # Full-screen hero with animated headline
      └── ProjectSlider     # Horizontal scroll of featured projects
          └── About         # Mission, vision & team introduction
              └── Clients   # Partner logos & testimonials
                  └── SentraSim    # Interactive clinical simulation demo
                      └── Showcase # Product screenshots & feature highlights
                          └── Services # Full product & service catalog
                              └── Audrey   # AI assistant feature spotlight
                                  └── News  # Latest updates & announcements
                                      └── ScrollGallery # Visual case studies
                                          └── CTA    # Conversion call-to-action
                                              └── Footer
```

---

## 📁 Project Structure

```
sentra-ai/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, metadata, providers)
│   ├── page.tsx                # Main landing page (composes all 13 sections)
│   └── globals.css             # Tailwind v4 @theme block + global styles
│
├── components/                 # Section & UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProjectSlider.tsx
│   ├── About.tsx
│   ├── Clients.tsx
│   ├── SentraSim.tsx           # Interactive clinical simulation engine
│   ├── Showcase.tsx
│   ├── Services.tsx
│   ├── Audrey.tsx              # AI assistant feature section
│   ├── News.tsx
│   ├── ScrollGallery.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── ui/                     # Reusable UI primitives
│       ├── Button.tsx
│       ├── Card.tsx
│       └── ...
│
├── lib/                        # Shared utilities
│   └── utils.ts                # `cn` helper (clsx + tailwind-merge)
│
├── public/                     # Static assets
│   ├── hero.jpg
│   └── ...
│
├── docs/                       # Architecture docs & ADRs
├── .github/                    # CI/CD workflows, issue & PR templates
├── next.config.mjs             # Next.js configuration (image domains, etc.)
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript strict configuration
├── .railwayignore              # Railway deployment ignore rules
├── CHANGELOG.md
├── CONTRIBUTING.md
├── COMMIT_CONVENTION.md
└── LICENSE
```

---

## 🎨 Design System

Sentra AI uses **Tailwind CSS v4** with a CSS-native theme defined entirely in `app/globals.css` via the `@theme` block — no `tailwind.config.ts` theme extension required.

### Custom Design Tokens

```css
/* app/globals.css */
@theme {
  /* Brand colors */
  --color-sentra-primary: #...;
  --color-sentra-accent:  #...;

  /* SentraSim Clinical UI tokens */
  --sdx-sim-bg:           #...;
  --sdx-sim-border:       #...;
  --sdx-sim-text-primary: #...;
  --sdx-sim-highlight:    #...;

  /* Typography */
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body:    'Inter', sans-serif;
}
```

> All `--sdx-*` prefixed tokens power the SentraSim clinical simulation UI specifically. Standard component tokens follow the `--color-*` naming convention.

### Typography

| Role | Font | Weight |
|------|------|--------|
| Display / Headings | Plus Jakarta Sans | 600–800 |
| Body / UI | Inter | 400–500 |

---

## ✅ Prerequisites

| Requirement | Version |
|-------------|---------|
| **Node.js** | ≥ 22 LTS |
| **npm** | ≥ 10 |

> **No database, external services, or environment variables are required for local development.** All content is hardcoded in component files for the landing site.

---

## 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/Claudesy/abyss.git

# 2. Navigate into the project
cd abyss

# 3. Install dependencies
npm install
```

---

## ⚙️ Configuration

### Local Development

No `.env` file is required. Start the dev server immediately after installation.

### Remote Image Domains

Remote image domains are whitelisted in `next.config.mjs`:

```js
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'framerusercontent.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
};
```

### Production Environment Variables

For production deployments, refer to `.env.example` for any runtime variables required by your hosting platform. Copy and populate before deploying:

```bash
cp .env.example .env.local
```

---

## 💻 Usage

```bash
# Start development server → http://localhost:3000
npm run dev

# Create a production build
npm run build

# Start the production server
npm run start

# Run ESLint checks
npm run lint
```

---

## 🧪 Testing

> Automated testing framework is planned — tracked in [`CHANGELOG.md`](./CHANGELOG.md).

### Manual Smoke Testing Checklist

Run through the following steps before every pull request:

- [ ] `npm run dev` — all 13 sections render without console errors
- [ ] **SentraSim** — start a simulation, advance through all steps
- [ ] **Audrey** — trigger AI assistant, verify response rendering
- [ ] **Animations** — confirm Framer Motion and GSAP transitions play correctly
- [ ] **Responsive** — test on mobile (375px), tablet (768px), desktop (1440px)
- [ ] `npm run build` — zero TypeScript errors, zero build errors
- [ ] `npm run lint` — zero ESLint errors or warnings

---

## 🚢 Deployment

### Railway (Primary)

The project auto-deploys via **Railway** on every push to `main`.

```bash
# Railway runs these commands automatically:
npm run build
npm run start
```

> See `.railwayignore` for files excluded from Railway deployments.

### Other Platforms

This is a standard Next.js application compatible with any Node.js-capable host:

| Platform | Notes |
|----------|-------|
| **Vercel** | Zero-config, recommended for Next.js |
| **Netlify** | Requires `@netlify/plugin-nextjs` |
| **Docker** | Use `npm run build && npm run start` |
| **Self-hosted** | Any Node.js ≥ 22 LTS environment |

---

## 🗺️ Roadmap

- [ ] **v1.1** — Automated testing (Playwright E2E + Vitest unit)
- [ ] **v1.2** — Internationalization (i18n) — EN / ID
- [ ] **v1.3** — CMS integration for News & Updates section
- [ ] **v2.0** — Full PKM Dashboard backend (FastAPI + PostgreSQL)
- [ ] **v2.1** — ACARS Chat System (WebSocket + E2E encryption)
- [ ] **v2.2** — ICD-X Converter with BPJS bulk validation
- [ ] **v2.3** — RPA Auto-Reporting (Playwright + e-Puskesmas portal)
- [ ] **v3.0** — SATUSEHAT & P-Care BPJS live integration

See [open issues](https://github.com/Claudesy/abyss/issues) for a full list of proposed features and known issues.

---

## 🤝 Contributing

Contributions are what make this project better. Any help is **greatly appreciated**.

Please read [**CONTRIBUTING.md**](./CONTRIBUTING.md) before submitting a pull request.

### Quick Contribution Guide

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feat/your-feature-name

# 3. Commit using Conventional Commits
git commit -m "feat(sentra-sim): add branching scenario support"

# 4. Push to your branch
git push origin feat/your-feature-name

# 5. Open a Pull Request
```

### Commit Convention

This project follows the [Conventional Commits](./COMMIT_CONVENTION.md) specification:

| Prefix | Usage |
|--------|-------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | Formatting, no logic change |
| `refactor:` | Code restructuring |
| `perf:` | Performance improvements |
| `test:` | Adding or updating tests |
| `chore:` | Build process, dependencies |

### Code Standards

- All code **must pass** `npm run lint` and `npm run build` before PR submission
- TypeScript strict mode — no `any` types
- Open an issue before starting any large feature

---

## 📜 License

Distributed under the **ISC License**. See [`LICENSE`](./LICENSE) for full text.

---

## 📬 Contact

<div align="center">

**Claudesy** — Principal Architect & Engineer

[![GitHub](https://img.shields.io/badge/GitHub-Claudesy-181717?style=flat-square&logo=github)](https://github.com/Claudesy)

**Repository:** [https://github.com/Claudesy/abyss](https://github.com/Claudesy/abyss)

<br/>

*Architected and built by the one and only Claudesy.
For better future to my Al, Ai, Au*

<br/>

---

<sub>Built with ❤️ for Indonesian healthcare workers everywhere.</sub>

</div>
