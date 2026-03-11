<!-- Masterplan and masterpiece by Claudesy. -->

# Security Policy

## Supported Versions

| Version | Supported |
|---|---|
| 1.x (current) | Yes |

---

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

To report a security vulnerability, please open a [GitHub Security Advisory](https://github.com/Claudesy/abyss/security/advisories/new) or email the maintainer directly (contact information available in the repository profile).

Please include:
- Type of issue (e.g., XSS, injection, exposed secret)
- Full paths of source files related to the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue

We aim to respond within **72 hours** and will provide a remediation timeline after assessment.

---

## Security Considerations

### Static Site Architecture

This project is a **static marketing/landing site** rendered via Next.js. It has no:
- User authentication or session management
- Database connections
- Server-side form processing
- User-uploaded content

The primary attack surface is limited to:
- **Client-side rendering** (XSS via dynamic content)
- **Third-party dependencies** (supply chain risk)
- **Remote image domains** (whitelisted in `next.config.mjs`)

### Dependency Auditing

Run `npm audit` regularly to check for known CVEs:

```bash
npm audit --audit-level=moderate
```

Any `HIGH` or `CRITICAL` findings must be remediated before deployment.

### Known Exceptions

None at this time.

---

## Disclosure Policy

We follow **responsible disclosure**. Once a fix is deployed, we will:
1. Publish a patch release.
2. Credit the reporter in `CHANGELOG.md` (unless they prefer anonymity).
3. Update this file with any relevant notes.

---

_Masterplan and masterpiece by Claudesy._
