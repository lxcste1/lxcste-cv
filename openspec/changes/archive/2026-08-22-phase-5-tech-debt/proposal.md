# Proposal: Phase 5 — Technical Debt

## Why

Phase 5 closes the outstanding technical debt accumulated during phases 0-4: two hooks with active lint errors that will break as soon as they are consumed, ~120 lines of dead translation data from the pre-RSC single-page design, and a mobile menu that renders broken links (404) with a broken dropdown layout since the `[lang]` route migration.

## What Changes

### Hooks
- Rewrite `hooks/useMobile.ts` using `useSyncExternalStore`, eliminating the `react-hooks/set-state-in-effect` error (`hooks/useMobile.ts:14`) and the hydration-mismatch risk.
- **BREAKING** Remove the legacy toast stack: `hooks/useToast.ts` (has lint error at line 18 plus a listener re-subscription bug), `components/ui/toast.tsx`, and `components/ui/toaster.tsx`. Toast capability is now provided by shadcn's current approach: `components/ui/sonner.tsx` (already present, backed by the `sonner` package).

### Translations
- Delete unused translation blocks from `lib/translations.ts` (both `es` and `en`): `hero.*`, `about.*`, `experience.*`, `skills.*`, `education.*`.
- Delete dead loose keys: `contact.info.phone`, `resume.nav`, `resume.availability`, `resume.footerRole`.
- Rationale: replaced by `resume.*` keys; experience job data now lives in `lib/resume-data.ts`.

### Mobile menu
- Fix `components/mobile-menu/MobileMenu.tsx` links: use language-prefixed routes (`/{lang}`, `/{lang}/projects`, `/{lang}/contact`) matching the desktop nav, fixing the current 404s.
- Fix dropdown layout: panel currently renders as an inline flex child of `<nav class="flex justify-between">`; move it out of flow (relative header container + absolute panel below) so it drops under the header.
- Add `aria-expanded` / `aria-controls` to the toggle button.

## Capabilities

### New Capabilities
- `hook-integrity`: hooks in `hooks/` pass lint without suppressions and follow React-recommended subscription patterns (`useSyncExternalStore` for media queries).
- `toast-sonner`: toast notifications via sonner; no legacy toast hook/components remain.
- `translation-hygiene`: `lib/translations.ts` contains only keys referenced by app code; both locales stay structurally identical.
- `mobile-nav`: mobile navigation renders correct language-prefixed links and a properly positioned dropdown panel.

### Modified Capabilities
- `source-organization`: requirement referencing `@/hooks/useToast` consumption by `Toaster` changes — the legacy toast hook is removed in favor of sonner.

## Impact

- **Code**: `hooks/useMobile.ts`, `hooks/useToast.ts` (deleted), `components/ui/toast.tsx` + `components/ui/toaster.tsx` (deleted), `components/mobile-menu/MobileMenu.tsx`, `components/header/Header.tsx` (pass `lang` to MobileMenu), `lib/translations.ts`.
- **Dependencies**: none added — `sonner` is already installed.
- **Consumers of removed code**: none today (`useToast`/`Toaster` have zero imports outside their own files), so removal is safe.
- **Verification**: `pnpm lint`, `pnpm test`, `pnpm build` must all pass; manual check of mobile nav at <768px on `/es` and `/en`.
