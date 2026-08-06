# AGENTS.md

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript 5.7
- Tailwind CSS v4 with `@tailwindcss/postcss` plugin (not the legacy PostCSS plugin)
- shadcn/ui (new-york style, RSC, lucide icons)
- pnpm (not npm/yarn — enforced by `pnpm-workspace.yaml`)

## Commands
```bash
pnpm dev          # starts dev server
pnpm build        # produces production build
pnpm start        # starts production server
pnpm lint         # runs eslint (eslint.config.mjs with next/core-web-vitals + typescript-eslint v9)
pnpm test         # runs jest (next/jest config, jsdom, @testing-library/react)
```

## Environment
- `RESEND_API_KEY` — required for the contact form (`app/api/contact/route.ts`)

## Architecture

### Entrypoints
| Route | Source | Render mode |
|-------|--------|-------------|
| `/` | `app/page.tsx` → `components/resume.tsx` | Client (single-page resume) |
| `/projects` | `app/projects/page.tsx` | Client |
| `/contact` | `app/contact/page.tsx` | Client |
| `/api/contact` | `app/api/contact/route.ts` | Server (POST) |

### Path alias
`@/*` maps to `./*` (project root), so `@/lib/utils` resolves to `lib/utils.ts`.

### Themes
The only active CSS file is `app/globals.css` (imported in `app/layout.tsx`). It uses Tailwind v4 `@theme` blocks and custom CSS classes (`.resume-shell`, `.hero`, etc.) for the main resume layout.

`styles/globals.css` is an older/unused shadcn-generated theme file. Do not modify it unless you verify it's actually loading.

### i18n
- `lib/translations.ts` — static translations object (ES + EN). Default language is `es`.
- `lib/language-context.tsx` — React context for language state (`"use client"`), provides `{ language, setLanguage, t }`.

### shadcn/ui
- Base color: neutral, CSS variables enabled
- Components live in `components/ui/`
- Some UI components may be unused — the main resume page uses custom CSS classes rather than shadcn components

## Gotchas
- **Known lint violations**: `components/ui/carousel.tsx` (react-hooks/set-state-in-effect), `components/ui/sidebar.tsx` (react-hooks/purity via Math.random), `components/ui/use-mobile.tsx` (react-hooks/set-state-in-effect), `hooks/use-mobile.ts` + `hooks/use-toast.ts` + `components/ui/use-toast.ts` (unused vars, duplicate hooks). These are shadcn-generated code — do not modify unless replacing the component entirely.
- **Images are unoptimized** (`images.unoptimized: true`) — likely for static export compatibility.
- The hardcoded `<html lang="en">` in `app/layout.tsx` doesn't match the default Spanish locale — be aware when adding SEO or a11y features.
- `pnpm-workspace.yaml` only exists to allow `sharp` build; this is not a real monorepo.
