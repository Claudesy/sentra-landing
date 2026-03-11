<!-- Architected and built by Claudesy. -->

# Contributing to Sentra AI

Thank you for your interest in contributing! This guide explains how to participate in the development of this project.

---

## Code of Conduct

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone.

**Examples of positive behaviour:**
- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Focusing on what is best for the overall community

**Unacceptable behaviour:**
- Harassment, trolling, insulting or derogatory comments
- Publishing others' private information without permission
- Other conduct considered inappropriate in a professional setting

Instances of unacceptable behaviour may be reported to community leaders. This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org), version 2.1.

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

All commits must follow the **Conventional Commits** specification (v1.0.0).

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

| Type | Description |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation only changes |
| `style` | Changes that do not affect the meaning of the code |
| `refactor` | A code change that neither fixes a bug nor adds a feature |
| `perf` | A code change that improves performance |
| `test` | Adding missing tests or correcting existing tests |
| `chore` | Changes to the build process, tooling, dependencies, or CI |
| `revert` | Reverts a previous commit |

### Examples

```
feat(hero): add animated gradient headline
fix(sentrasim): correct step 3 async timing bug
docs: update README with deployment instructions
chore: upgrade framer-motion to 12.35
```

### Breaking Changes

Append `!` after the type/scope and include a `BREAKING CHANGE:` footer:

```
feat(api)!: rename simulation endpoint

BREAKING CHANGE: /api/sim is now /api/v1/sim.
```

References: [Conventional Commits Specification](https://www.conventionalcommits.org/)

---

## Pull Request Process

1. Ensure `npm run lint` passes with zero errors.
2. Ensure `npm run build` succeeds.
3. Fill in the [pull request template](./.github/PULL_REQUEST_TEMPLATE.md) completely.
4. Link to any related issues.
5. Request review from a maintainer.

---

## Style Guide

- **TypeScript:** Strict mode enabled. No `any` types.
- **Components:** Client components with `"use client"` directive. One component per file.
- **Styling:** Tailwind CSS utilities only. No inline styles except for dynamic values.
- **Imports:** Use `@/` path alias for project imports.
- **Icons:** Lucide React only.
- **Animation:** Framer Motion or GSAP. No CSS animation hacks.

---

## Reporting Issues

Use the [issue templates](./.github/ISSUE_TEMPLATE/) for:
- [Bug reports](./.github/ISSUE_TEMPLATE/bug_report.md)
- [Feature requests](./.github/ISSUE_TEMPLATE/feature_request.md)

---

## Security Policy

**Please do not report security vulnerabilities through public GitHub issues.**

To report a vulnerability, please open a [GitHub Security Advisory](https://github.com/Claudesy/abyss/security/advisories/new) or email the maintainer directly.

Please include: type of issue, full paths of source files, steps to reproduce, and impact assessment.

We aim to respond within **72 hours**. We follow **responsible disclosure** — once a fix is deployed, we will publish a patch release and credit the reporter.

### Dependency Auditing

```bash
npm audit --audit-level=moderate
```

Any `HIGH` or `CRITICAL` findings must be remediated before deployment.
