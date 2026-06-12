# Portfolio - Berk Öner

Portfolio personnel en Next.js.

## Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- SCSS Modules / SCSS global
- Zustand

## Installation

```bash
pnpm install
```

## Scripts

- `pnpm dev` : lance le serveur de développement
- `pnpm build` : build de production
- `pnpm start` : lance le build de production
- `pnpm lint` : lance ESLint

## Structure

```text
.
├── public/
├── src/
│   ├── app/            # Routes App Router, metadata, sitemap, robots
│   ├── components/     # Composants UI
│   ├── lib/            # Utilitaires métier
│   ├── stores/         # Stores Zustand
│   ├── styles/         # Styles SCSS globaux/modules
│   └── types/          # Types partagés
└── ...
```
