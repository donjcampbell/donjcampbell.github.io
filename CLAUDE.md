# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start local dev server (Vite HMR)
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm run deploy     # Build and publish to GitHub Pages (gh-pages -d dist)
```

There are no tests configured in this project.

## Architecture

This is a personal portfolio site built with React 18 + Vite, deployed to GitHub Pages via the `gh-pages` package.

**Routing**: Uses `HashRouter` (not `BrowserRouter`) so that client-side routes work on GitHub Pages without a custom 404 redirect. Routes are defined in `src/App.jsx`:
- `/` → About
- `/resume` → Resume
- `/blog` → Blog

**Structure**:
- `src/pages/` — full-page components (About, Resume, Blog). Each page owns its data as module-level constants (no external data fetching).
- `src/components/` — shared UI (currently just `Navbar`).
- `src/index.css` — global styles with CSS custom properties (`--color-*`, `--spacing-*`). Each component has a co-located `.css` file.
- `public/` — static assets served as-is (currently just `favicon.svg`).
- `dist/` — build output; committed/deployed but not tracked in git.

**Styling approach**: Plain CSS with CSS variables defined in `:root` in `index.css`. No CSS framework. The `.card` utility class is used across pages for bordered, rounded sections.

**Content**: Page content (experience, skills, blog posts) is hardcoded as JS constants inside each page file — there is no CMS or separate data layer.

**Deployment**: `npm run deploy` runs `predeploy` (build) then publishes `dist/` to the `gh-pages` branch, which serves the site at `https://donjcampbell.github.io`.
