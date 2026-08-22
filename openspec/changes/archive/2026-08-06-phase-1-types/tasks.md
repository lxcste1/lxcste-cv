## 1. Create types/ directory structure

- [x] 1.1 Create `types/` directory and `types/components/` subdirectory

## 2. Migrate Language and TranslationKey types

- [x] 2.1 Create `types/language.ts` with `Language` and `TranslationKey` types
- [x] 2.2 Update `lib/translations.ts` to import and re-export types from `types/language.ts`
- [x] 2.3 Update `lib/language-context.tsx` imports if needed

## 3. Migrate ContactFormData

- [x] 3.1 Create `types/contact.ts` with `ContactFormData` interface
- [x] 3.2 Update `app/api/contact/route.ts` to import from `types/contact.ts`

## 4. Extract resume data types

- [x] 4.1 Create `types/resume.ts` with `ExperienceItem` interface, `Expertise` alias, `TechnologyCategory` interface
- [x] 4.2 Update `components/resume.tsx` to import types from `types/resume.ts`

## 5. Extract component props interfaces

- [x] 5.1 Create `types/components/HeaderProps.ts` (no props — skipped)
- [x] 5.2 Create `types/components/FooterProps.ts` (no props — skipped)
- [x] 5.3 Create `types/components/ContactFormProps.ts` (no props — skipped)
- [x] 5.4 Create `types/components/ContactInfoProps.ts` (no props — skipped)
- [x] 5.5 Create `types/components/ProjectCardProps.ts`
- [x] 5.6 Create `types/components/HeroSectionProps.ts` (no props — skipped)
- [x] 5.7 Create `types/components/EducationSectionProps.ts` (no props — skipped)
- [x] 5.8 Create `types/components/ExperienceSectionProps.ts` (no props — skipped)
- [x] 5.9 Create `types/components/SkillsSectionProps.ts` (no props — skipped)
- [x] 5.10 Create `types/components/ResumeProps.ts` (no props — skipped)
- [x] 5.11 Create `types/components/ThemeProviderProps.ts` (uses next-themes prop — skipped)
- [x] 5.12 Update all component files to import props from `types/components/`

## 6. Audit interface vs type

- [x] 6.1 Search all `.ts` and `.tsx` files (excluding `components/ui/`) for `type XProps = {` patterns
- [x] 6.2 Convert any Props `type` aliases to `interface`
- [x] 6.3 Convert domain entity `type` aliases to `interface` where applicable

## 7. Eliminate any

- [x] 7.1 Remove `as unknown as string[]` cast from `app/projects/page.tsx` by adding proper types
- [x] 7.2 Search entire codebase (excluding `components/ui/`) for remaining `any` usages and remove them
- [x] 7.3 Add `@typescript-eslint/no-explicit-any: error` rule to `eslint.config.mjs`

## 8. Validate

- [x] 8.1 Run `pnpm build` and verify zero TypeScript errors
- [x] 8.2 Run `pnpm lint` and verify zero new violations (shadcn/ui errors are documented exceptions)
- [x] 8.3 Run `pnpm test` and verify all tests pass
- [x] 8.4 Run `pnpm dev` and verify app renders correctly
