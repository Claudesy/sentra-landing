<!-- Architected and built by Claudesy. -->

# Contributing to Sentra AI

Thank you for your interest in contributing! This guide explains how to participate in the development of this project.

---

## Code of Conduct

By participating, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). Please read it before contributing.

---

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/abyss.git
   cd abyss
   npm install
   ```
3. **Create a branch** following the naming convention:
   ```bash
   git checkout -b feat/your-feature-name
   ```

---

## Development Workflow

```bash
npm run dev    # Start dev server
npm run lint   # Run ESLint (must pass before committing)
npm run build  # Production build (must succeed before PR)
```

---

## Commit Convention

All commits must follow the **Conventional Commits** specification. See [COMMIT_CONVENTION.md](./COMMIT_CONVENTION.md) for full details.

Examples:
```
feat: add Audrey AI section
fix: correct SentraSim step timing
docs: update README installation steps
chore: upgrade Next.js to 16.2
```

---

## Pull Request Process

1. Ensure `npm run lint` passes with zero errors.
2. Ensure `npm run build` succeeds.
3. Fill in the [pull request template](./.github/PULL_REQUEST_TEMPLATE.md) completely.
4. Link to any related issues.
5. Request review from a maintainer.

---

## Reporting Issues

Use the [issue templates](./.github/ISSUE_TEMPLATE/) for:
- [Bug reports](./.github/ISSUE_TEMPLATE/bug_report.md)
- [Feature requests](./.github/ISSUE_TEMPLATE/feature_request.md)

---

## Style Guide

- **TypeScript:** Strict mode enabled. No `any` types.
- **Components:** Client components with `"use client"` directive. One component per file.
- **Styling:** Tailwind CSS utilities only. No inline styles except for dynamic values.
- **Imports:** Use `@/` path alias for project imports.
- **Icons:** Lucide React only.
- **Animation:** Framer Motion or GSAP. No CSS animation hacks.

---

_Designed and constructed by Claudesy._
