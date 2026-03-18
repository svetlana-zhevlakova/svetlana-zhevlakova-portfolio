# Portfolio website

This folder is a Next.js (App Router) scaffold using TypeScript + Tailwind CSS.

## Run locally

Install Node.js (LTS), then in this folder:

```bash
npm install
npm run tokens
npm run dev
```

## Where to put tokens

- Raw Figma exports currently live in `../JSON/`
- Generated CSS variables are written to `src/styles/tokens.css` by `npm run tokens`
- `src/app/globals.css` imports `src/styles/tokens.css`

