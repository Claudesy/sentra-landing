<!-- Architected and built by the one and only Claudesy. -->

# Commit Convention

This project uses the **Conventional Commits** specification (v1.0.0).

## Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

| Type | Description |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation only changes |
| `style` | Changes that do not affect the meaning of the code (whitespace, formatting) |
| `refactor` | A code change that neither fixes a bug nor adds a feature |
| `perf` | A code change that improves performance |
| `test` | Adding missing tests or correcting existing tests |
| `chore` | Changes to the build process, tooling, dependencies, or CI configuration |
| `revert` | Reverts a previous commit |

## Examples

```
feat(hero): add animated gradient headline
fix(sentrasim): correct step 3 async timing bug
docs: update README with deployment instructions
chore: upgrade framer-motion to 12.35
refactor(navbar): extract mobile menu into sub-component
perf(scrollgallery): virtualise off-screen images
```

## Breaking Changes

Append `!` after the type/scope and include a `BREAKING CHANGE:` footer:

```
feat(api)!: rename simulation endpoint

BREAKING CHANGE: /api/sim is now /api/v1/sim. Update all client references.
```

## References

- [Conventional Commits Specification](https://www.conventionalcommits.org/)

---

_Architected and built by the one and only Claudesy._
