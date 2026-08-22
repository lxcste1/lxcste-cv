## 1. Convention documentation

- [x] 1.1 Update `CODING_CONVENTIONS.md` to define `components/<kebab-case>/<PascalCase>.tsx` for application components and reserve `components/ui/` for shadcn primitives.
- [x] 1.2 Document that reusable hooks live in `hooks/` with camelCase filenames and that tests are co-located in their owning component or hook folder.

## 2. Application component migration

- [x] 2.1 Move `ContactForm`, `ContactInfo`, `Footer`, `FormSkeleton`, and `Header` to individual `components/<kebab-case>/<PascalCase>.tsx` folders.
- [x] 2.2 Move `LanguageSwitcher`, `MobileMenu`, `ProjectCard`, `SectionHeading`, and `ThemeProvider` to individual `components/<kebab-case>/<PascalCase>.tsx` folders.
- [x] 2.3 Update all application imports to the migrated component paths and remove references to the former flat filenames.

## 3. Hook consolidation

- [x] 3.1 Rename `hooks/use-mobile.ts` to `hooks/useMobile.ts` and `hooks/use-toast.ts` to `hooks/useToast.ts`.
- [x] 3.2 Update `Sidebar`, `Toaster`, and any other consumers to import the renamed canonical hooks.
- [x] 3.3 Confirm `components/ui/use-mobile.tsx` and `components/ui/use-toast.ts` have no consumers, then remove both duplicate implementations.

## 4. Validation

- [x] 4.1 Search active source and test files for legacy component and hook import paths, excluding historical OpenSpec archive references.
- [x] 4.2 Run `pnpm lint` and verify that this change introduces no lint findings beyond the documented baseline.
- [x] 4.3 Run `pnpm test` and `pnpm build` successfully.
