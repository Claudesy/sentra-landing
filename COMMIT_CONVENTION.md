<!-- The vision and craft of Claudesy. -->

# Commit Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

## Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

## Types

| Type       | When to use |
|------------|-------------|
| `feat`     | A new feature visible to users |
| `fix`      | A bug fix |
| `chore`    | Maintenance tasks, dependency updates, tooling |
| `docs`     | Documentation only changes |
| `refactor` | Code restructuring with no behaviour change |
| `test`     | Adding or correcting tests |
| `perf`     | Performance improvements |
| `ci`       | CI/CD pipeline changes |
| `build`    | Build system or external dependency changes |
| `style`    | Formatting, missing semicolons — no logic change |
| `revert`   | Reverts a previous commit |

## Scope (optional)

Use the component or module name: `navbar`, `hero`, `sentrasim`, `ci`, `docs`, `deps`.

## Rules

- Subject line: imperative mood, lowercase, no period, max 72 characters
- Body: wrap at 100 characters, explain *why* not *what*
- Breaking changes: add `!` after type/scope or `BREAKING CHANGE:` footer
- Reference issues: `Closes #123`, `Fixes #456`

## Examples

```
feat(sentrasim): add prognosis confidence interval display

fix(navbar): correct active link detection on scroll

chore(deps): bump next from 16.1.5 to 16.1.6

docs(readme): update deployment section for Railway

ci: add security audit workflow
```

---

_Masterplan and masterpiece by Claudesy._
