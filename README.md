# Tevfik Murat Yildirim — Academic Website

Source for the personal academic website of Tevfik Murat Yildirim, Professor of
Political Science and Director of Graduate Studies at the University of
Stavanger.

The single-page site includes an academic profile, research areas, complete
publication record, datasets, teaching, selected talks, public scholarship,
downloadable CV, and contact details.

## Local development

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

The local preview opens at `http://localhost:3000`.

## Verification and static export

```bash
pnpm lint
pnpm test
```

The production build uses vinext's static export mode. GitHub Pages-ready files
are written to `dist/client`.

## Main content files

- `app/page.tsx` — page structure
- `app/content.ts` — publications, teaching, datasets, appointments, and talks
- `app/globals.css` — visual system and responsive layout
- `public/` — portrait, CV, social card, and icons

The site is not published by local development or build commands. Publishing is
handled separately after the final preview has been approved.
