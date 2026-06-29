# Sahil Hossen — Portfolio

My personal portfolio website, built with **React + Vite + TypeScript** and deployed on **GitHub Pages**.

🔗 **Live:** https://sahil-hossen.github.io

## Tech stack

- React 18 + TypeScript
- Vite 6 (build tooling)
- Plain CSS design system (no UI framework) with a custom dark theme
- GitHub Actions → GitHub Pages (CI/CD)

## Run locally

```bash
npm install
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build into /dist
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/   UI sections (Hero, About, Experience, Projects, Skills, ...)
  data/         portfolio.ts — single source of content
  hooks/        useReveal — scroll-reveal animation
  index.css     design system + styles
public/         resume PDF, favicon
.github/        Pages deploy workflow
```

## Editing content

All text (experience, projects, skills, links) lives in
[`src/data/portfolio.ts`](src/data/portfolio.ts). Update that file and the whole
site updates.

## Deployment

Every push to `main` triggers the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes it to GitHub Pages.

---

© Sahil Hossen
