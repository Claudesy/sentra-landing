<!-- Claudesy's vision, brought to life. -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Add automated testing framework (Vitest + Playwright)
- Add OpenTelemetry instrumentation for performance monitoring
- Add `@next/bundle-analyzer` for bundle size visibility
- Add structured logging (winston or pino)

---

## [1.1.0] — 2026-03-11

### Added
- `CODE_OF_CONDUCT.md` — contributor conduct standards (Contributor Covenant 2.1)
- `SECURITY.md` — responsible disclosure policy and vulnerability reporting contact
- `COMMIT_CONVENTION.md` — Conventional Commits specification with examples
- `.github/workflows/cd.yml` — environment-gated CD pipeline for production deployments
- `REVIEW_REPORT.md` — comprehensive audit report (brand, security, 2026 gap analysis)
- Claudesy brand signatures in `app/globals.css`, `eslint.config.mjs`, `lib/site-links.ts`

### Security
- `next.config.mjs`: added HSTS (`Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`)
- `next.config.mjs`: added Content-Security-Policy header (default-src, script-src, img-src, connect-src, frame-ancestors)

### Changed
- `tsconfig.json`: upgraded `target` from `ES2017` → `ES2022` (2026 baseline)
- `tsconfig.json`: added `verbatimModuleSyntax: false` (explicit TypeScript 5.x alignment)

---

## [1.0.0] — 2026-03-11

### Added
- Comprehensive repository audit: brand protocol, professional scaffold, CI/CD, security docs
- `README.md` — full project documentation with architecture overview
- `CONTRIBUTING.md` — contribution guidelines
- `CODE_OF_CONDUCT.md` — Contributor Covenant 2.1
- `SECURITY.md` — responsible disclosure policy
- `CHANGELOG.md` — Keep a Changelog format
- `LICENSE` — ISC licence
- `COMMIT_CONVENTION.md` — Conventional Commits specification
- `.editorconfig` — consistent editor settings across IDEs
- `.gitattributes` — line ending normalisation
- `docs/architecture.md` — architecture decision documentation
- `docs/adr/ADR-001-nextjs-app-router.md` — architecture decision record
- `.github/workflows/ci.yml` — lint + build CI pipeline
- `.github/workflows/security.yml` — dependency security audit
- `.github/ISSUE_TEMPLATE/bug_report.md`
- `.github/ISSUE_TEMPLATE/feature_request.md`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `scripts/setup.sh` — developer environment setup script

### Changed
- `next-env.d.ts` — added Claudesy brand signature

### Initial release (2026-01-15)
- Sentra AI landing site: Navbar, Hero, ProjectSlider, About, Clients, SentraSim, Showcase, Services, Audrey, News, ScrollGallery, CTA, Footer
- SentraSim clinical simulation engine (21+ state hooks, sequential async simulation)
- Audrey AI assistant section
- Kinetic navigation, immersive scroll gallery, bento cards UI components

---

_Claudesy's vision, brought to life._
