# Portfolio - Berk Öner

Portfolio personnel migré progressivement vers Next.js.

## Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- SCSS Modules / SCSS global
- Zustand

## Migration

Le code historique React + Vite est conservé temporairement dans `_legacy/` afin de récupérer
progressivement composants, styles, animations et contenus.

- `_legacy/` reste versionné dans Git.
- Le projet Next.js actif vit à la racine.
- `_legacy/` est exclu de TypeScript et ESLint.

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
├── _legacy/            # Ancien projet React + Vite (temporaire)
├── public/
├── src/
│   ├── app/            # Routes App Router, metadata, sitemap, robots
│   ├── components/     # Composants UI
│   ├── lib/            # Utilitaires métier
│   ├── store/          # Stores Zustand
│   ├── styles/         # Styles SCSS globaux/modules
│   └── types/          # Types partagés
└── ...
```
