# Portfolio Project Handoff Context

Continue from existing Portfolio website project state.

## Stack

- Next.js App Router + TypeScript + Tailwind + CSS variables
- Tokens generated from Figma exports and imported in globals

## Repo

- https://github.com/svetlana-zhevlakova/svetlana-zhevlakova-portfolio
- `main` branch already pushed
- latest commit for Vercel author fix: `6a72605`

## Important Files and Components

- `src/styles/tokens.css` (generated token vars)
- `scripts/generate-tokens-css.mjs` (token generator)
- `src/app/layout.tsx` (global TopNavigation + Footer + font setup)
- `src/components/nav/TopNavigation.tsx`
  - About -> `/about`
  - Resume -> external Google Doc (new tab)
  - LinkedIn -> external profile (new tab)
  - Contact me -> `mailto:zhevlakova.design@gmail.com`
- `src/components/Button.tsx` (fixed typing for Link href to pass Vercel build)
- `src/components/Tag.tsx`
- `src/components/CaseCard.tsx`
- `src/components/Footer.tsx`
- `src/config/cases.ts`
- `src/components/case/CaseNav.tsx` (exists but currently not rendered on case pages)
- `src/app/page.tsx` (home page with 3 case cards linked to case routes)
- `src/app/about/page.tsx` (about page with photo from `public`)
- `src/app/cases/kids-party-marketplace/page.tsx`
- `src/app/cases/reflection-driven-mood-tracker/page.tsx`
- `src/app/cases/data-heavy-workflows/page.tsx`

## Routing

- `/` -> Home
- `/about` -> About
- `/cases/kids-party-marketplace`
- `/cases/reflection-driven-mood-tracker`
- `/cases/data-heavy-workflows`

## Current Behavior Decisions

- Removed the extra clickable case list under top nav on case pages (was not in Figma)
- Case pages keep bottom "Back to case studies / Next case study" nav

## Dev and Ops Notes

- `npm install` completed
- `npm run dev` works locally
- If watcher issues appear on mac: `ulimit -n 10000`
- Vercel previously failed on Button href typing; fixed in `src/components/Button.tsx`

## Next Task Placeholder

[PUT YOUR NEXT TASK HERE]

