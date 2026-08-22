# Tasks: Phase 5 — Technical Debt

## 1. Hook: useIsMobile

- [x] 1.1 Rewrite `hooks/useMobile.ts` using `useSyncExternalStore` per design D1 (subscribe helper, client snapshot `window.innerWidth < MOBILE_BREAKPOINT`, server snapshot `false`)
- [x] 1.2 Verify `components/ui/sidebar.tsx` compiles unchanged against the new hook signature (`() => boolean`)
- [x] 1.3 Run `pnpm lint` and confirm zero errors for `hooks/useMobile.ts`

## 2. Toast migration to sonner

- [x] 2.1 Confirm no imports reference `@/hooks/useToast`, `@/components/ui/toast`, or `@/components/ui/toaster` (grep whole repo)
- [x] 2.2 Delete `hooks/useToast.ts`, `components/ui/toast.tsx`, `components/ui/toaster.tsx`
- [x] 2.3 Keep `components/ui/sonner.tsx` as canonical toaster; verify it lints clean
- [x] 2.4 Run `pnpm lint` and confirm the `no-unused-vars` finding for `actionTypes` is gone

## 3. Translation cleanup

- [x] 3.1 In `lib/translations.ts`, delete from BOTH locales: top-level blocks `hero`, `about`, `experience`, `skills`, `education`
- [x] 3.2 Delete from BOTH locales: `contact.info.phone`, `resume.nav`, `resume.availability`, `resume.footerRole`
- [x] 3.3 Verify key parity: `es` and `en` expose identical structures (spot-check or small script)
- [x] 3.4 Run `pnpm build` to prove no consumer referenced a deleted key

## 4. Mobile menu

- [x] 4.1 Add `lang: string` prop to `MobileMenuProps`; update `Header.tsx` call site to pass `lang`
- [x] 4.2 Replace hardcoded links with `` href={`/${lang}`} ``, `` href={`/${lang}/projects`} ``, `` href={`/${lang}/contact`} ``
- [x] 4.3 Rebuild menu as right-side drawer per updated design D4: `Drawer direction="right"` from `components/ui/drawer.tsx`, links wrapped in `DrawerClose`
- [x] 4.4 Verify accessibility: trigger exposes `aria-expanded` (Radix automatic), drawer traps focus and closes on navigation/Escape/overlay
- [x] 4.5 Manual check at <768px on `/es` y `/en`: hamburger opens right drawer, all three links navigate without 404, drawer closes after navigation
- [x] 4.6 Hide drawer trigger on desktop (`md:hidden`)
- [x] 4.7 Add `DrawerTitle` (email) + `DrawerDescription` (location) to silence Radix a11y console error
- [x] 4.8 Add GitHub/LinkedIn links inside the drawer; relocate `LanguageSwitcher` next to the drawer trigger on mobile (outside the drawer), reverting the temporary `onNavigate` callback

## 5. Verification & docs

- [x] 5.1 Full gate: `pnpm lint && pnpm test && pnpm build` all green
- [x] 5.2 Update AGENTS.md "Known lint findings" section: remove entries for `hooks/useMobile.ts` and `hooks/useToast.ts`
- [x] 5.3 Confirm no regression in existing Jest tests (`pnpm test`)
