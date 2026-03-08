# Repository Guidelines

## Project Structure & Module Organization
This repository is a small React 18 + Vite portfolio site deployed to GitHub Pages. Application code lives in `src/`. Use `src/pages/` for route-level views (`About.jsx`, `Resume.jsx`, `Blog.jsx`) and `src/components/` for shared UI such as `Navbar.jsx`. Global styling and CSS custom properties live in `src/index.css`; page and component styles are co-located as `*.css` files beside their matching JSX files. Static assets that should be served as-is belong in `public/` (for example `public/favicon.svg`). Build output is generated into `dist/`.

## Build, Test, and Development Commands
Run `npm install` once to install dependencies. Use `npm run dev` to start the Vite development server with hot reload. Use `npm run build` to create the production bundle in `dist/`. Use `npm run preview` to serve the built output locally before publishing. Use `npm run lint` to run ESLint across the project. Use `npm run deploy` to build and publish `dist/` to the `gh-pages` branch.

## Coding Style & Naming Conventions
Follow the existing style: 2-space indentation, semicolon-free JavaScript, and ES module imports. Write React components as function components with PascalCase filenames and exports, such as `About.jsx`. Keep route content inside the page modules unless there is a clear need to extract reusable data or UI. Name CSS files to match their component or page (`Navbar.css`, `Resume.css`) and prefer the shared CSS variables in `src/index.css` over hard-coded colors and spacing.

## Testing Guidelines
There is currently no automated test suite configured. For now, treat `npm run lint` and a manual check in `npm run dev` or `npm run preview` as the minimum validation for each change. When adding tests later, place them under `src/` alongside the feature or in a dedicated `tests/` directory, and use filenames ending in `.test.jsx` or `.test.js`.

## Commit & Pull Request Guidelines
Keep commit subjects short, imperative, and descriptive, consistent with the current history (for example, `Add contact links to About page`). Group related changes into a single commit when practical. Pull requests should explain the user-facing change, note any routing or deployment impact, link the relevant issue when one exists, and include screenshots for visual updates.

## Deployment Notes
Routing uses `HashRouter`, not `BrowserRouter`, so GitHub Pages can serve deep links without extra server configuration. Preserve that unless the deployment strategy changes.
