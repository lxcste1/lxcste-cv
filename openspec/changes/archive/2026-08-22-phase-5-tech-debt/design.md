# Design: Phase 5 — Technical Debt

## Context

Phases 0-4 migrated the CV to Next.js App Router with `[lang]` routes, RSC pages, extracted types, and naming conventions. Three debt items remain active:

1. `hooks/useMobile.ts` sets state synchronously inside `useEffect` (lint error `react-hooks/set-state-in-effect`, flagged in AGENTS.md as a known gotcha). Its only consumer is shadcn's `components/ui/sidebar.tsx`.
2. The legacy toast stack (`hooks/useToast.ts` + `components/ui/toast.tsx` + `components/ui/toaster.tsx`) has a lint error (`no-unused-vars` on `actionTypes`), a latent listener-resubscription bug (effect depends on `[state]`), and zero consumers.
3. `MobileMenu.tsx` still targets pre-migration routes (`/projects`, `/contact`) that no longer exist → 404s; its dropdown renders as an inline flex child of the header `<nav>`.
4. `lib/translations.ts` carries ~120 lines of dead keys from the old single-page design (verified by exhaustive grep of every consumer).

## Goals / Non-Goals

**Goals:**
- Zero lint errors originating from project code under `hooks/`
- Single, modern toast mechanism (sonner)
- Translations file contains only referenced keys, locales structurally identical
- Mobile nav functional at <768px on all routes

**Non-Goals:**
- Refactoring `components/ui/sidebar.tsx` internals (shadcn-generated; only its hook dependency changes behavior implicitly)
- Adding toasts to any feature (contact form success/error already handled inline)
- Migrating `ProjectCard` img → next/image or other AGENTS.md-listed known findings
- i18n routing redesign

## Decisions

### D1: Rewrite `useIsMobile` with `useSyncExternalStore`
```ts
const MOBILE_BREAKPOINT = 768;
const subscribe = (cb: () => void) => {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
};
export function useIsMobile() {
  return useSyncExternalStore(
    subscribe,
    () => window.innerWidth < MOBILE_BREAKPOINT,
    () => false,
  );
}
```
*Why*: eliminates the setState-in-effect violation entirely, removes manual listener lifecycle, and provides an explicit server snapshot — no hydration flash. *Alternatives*: lazy `useState(() => ...)` initializer (breaks SSR — no `window`); keep effect but defer with microtask (masks the rule, adds complexity). Signature stays `() => boolean`, so `sidebar.tsx` needs no changes.

### D2: Delete legacy toast stack, adopt sonner
Remove `hooks/useToast.ts`, `components/ui/toast.tsx`, `components/ui/toaster.tsx`. Keep `components/ui/sonner.tsx` as the canonical toaster. No imports break (verified: zero external consumers). *Why over fixing useToast*: user decision — sonner is shadcn's current recommendation, less owned code, and the legacy hook had a second latent bug. If toasts are needed later, mount `<Toaster />` and call `toast()` from `sonner`.

### D3: Delete dead translation blocks wholesale
Remove per locale: `hero`, `about`, `experience`, `skills`, `education` top-level objects; loose keys `contact.info.phone`, `resume.nav`, `resume.availability`, `resume.footerRole`. Both locales edited identically to preserve structural parity. Safety net: `as const` typing means any missed consumer fails `pnpm build` immediately.

### D4: Mobile menu — language-prefixed links in a right-side drawer
- `Header.tsx` passes existing `lang` prop to `<MobileMenu nav={nav} lang={lang} />`; links become `` href={`/${lang}`} ``, etc.
- Container: the toggle + menu live inside shadcn's `components/ui/drawer.tsx` (vaul) with `direction="right"`, sliding from the side where the hamburger sits. Trigger is `md:hidden` (mobile-only). Vaul/Radix provide focus trap, overlay, Escape handling and swipe-to-dismiss out of the box; each link is wrapped in `DrawerClose` so navigation closes the drawer.
- Contents: `DrawerTitle` = email (mailto link), `DrawerDescription` = location (satisfies Radix title requirement); nav links; GitHub/LinkedIn links. Section labels derived from the active `lang`.
- Language switching: `LanguageSwitcher` renders next to the drawer trigger in a mobile-only flex container (`md:hidden`, Suspense-wrapped like the desktop instance), outside the drawer — the drawer stays uncontrolled. Switching preserves the current route by replacing only the `[lang]` segment (`usePathname`).
- Accessibility: Radix sets `aria-expanded`/`aria-controls` on the trigger automatically; explicit `aria-label="Toggle menu"` kept.

## Risks / Trade-offs

- [Deleting translations breaks an unknown consumer] → mitigated by build-time TS check (`as const`) + full-project grep already performed; `pnpm build` gates the task.
- [sonner Toaster not mounted anywhere yet] → acceptable: capability exists, mounting is a future feature task; document in CODING_CONVENTIONS if it exists.
- [useSyncExternalStore returns `false` during SSR for mobile users] → same first-paint behavior as today (`!!undefined === false`); sidebar already tolerates this.
- [Absolute panel overlaps hero content] → intended overlay pattern; z-index inherited from fixed header (`z-50`).
- [AGENTS.md drift] → update AGENTS.md "Known lint findings" section once useMobile/useToast errors are gone.

## Migration Plan

Single PR, no data migration. Order: hooks fix → toast deletion → translations cleanup → mobile menu fix → lint/test/build verification. Rollback = revert commit; no persisted state involved.

## Open Questions

None remaining (toast strategy and translation removal confirmed with user).
