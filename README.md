<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Oraza Wagty 2026 — Mary

![CI](https://github.com/alpik941/oraza-wagty-2026-mary/actions/workflows/ci.yml/badge.svg?branch=main)

Interactive Ramadan calendar for 2026 (Mary, Turkmenistan): prayer times, countdown timers, and duas.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Quality Checks

- TypeScript: `npm run typecheck`
- Lint: `npm run lint`
- Format check: `npm run format:check`
- Build: `npm run build`

## Deploy (Vercel)

1. Push this project to a GitHub repository.
2. In Vercel: **New Project** → **Import Git Repository** → select the repo.
3. Vercel will run `npm ci` and `npm run build` and deploy `dist/` (see `vercel.json`).

### Custom domain

1. In Vercel project settings: **Domains** → add your domain.
2. Update DNS records in your registrar/DNS provider as Vercel prompts (usually `CNAME` for subdomain or `A` record for apex).
