# Gonzhome Maintenance Notes

## Stack

Static GitHub Pages site served at the **root** of `gonzhome.us` (no subpath).
Vanilla HTML/CSS/JS, no build step.

## Key files

| File | Role |
|---|---|
| `index.html` | Landing page (intro + apps list + About) |
| `app.js` | Theme toggle, related-sites dropdown, app card rendering |
| `styles.css` | Shared glass/gradient header styling used across the family |
| `assets/`, `favicon.svg` | Imagery |
| `.nojekyll` | Required — keeps GitHub Pages from choking on underscore folders |

## Critical rules

1. This site is the hub: the Related Sites dropdown here must match every other
   site in the family.
2. Theme is persisted in the `pnptools-theme`-style key and applied by an inline
   script before CSS loads. Never remove that script.

## Registry & provenance rule (portfolio-wide)

Personal project — completely separate from Apple work.

- No npm dependencies today. If any are ever added, commit an `.npmrc` pinning
  `registry=https://registry.npmjs.org` before the first lockfile is generated.
  Apple's internal mirror (`npm.apple.com`, `artifacts.apple.com/artifactory/...`)
  is unreachable from GitHub Actions and causes `ENOTFOUND` CI failures.
- Audit before pushing: `../scripts/check-registry.sh` (add `--fix` to normalize).
- No work credentials, internal hostnames, proprietary assets, or confidential
  material in this repo.
