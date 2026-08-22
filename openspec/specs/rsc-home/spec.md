## ADDED Requirements

### Requirement: Home page renders as static generation
The home page (`/`) SHALL be a Server Component using Static Site Generation (SSG) with `generateStaticParams` producing one page per supported language (`es`, `en`).

#### Scenario: Home page is statically generated
- **WHEN** developer runs `pnpm build`
- **THEN** the route `/` shows `○ (Static)` in the build output

#### Scenario: Home renders per language
- **WHEN** a user visits `/es`
- **THEN** the resume content is rendered in Spanish
- **WHEN** a user visits `/en`
- **THEN** the resume content is rendered in English

### Requirement: Home page follows single responsibility
The home page file (`app/[lang]/page.tsx`) SHALL be a clean orchestrator that imports data, helpers, and translations from separate modules. It SHALL NOT define data arrays, subcomponents, or types inline.

#### Scenario: No data arrays in page file
- **WHEN** developer inspects `app/[lang]/page.tsx`
- **THEN** the file does NOT contain array literals for `expertise`, `experience`, or `technologies`
- **AND** these arrays are imported from `lib/resume-data.ts`

#### Scenario: No subcomponents in page file
- **WHEN** developer inspects `app/[lang]/page.tsx`
- **THEN** the file does NOT contain inner function components (like `SectionHeading`)
- **AND** `SectionHeading` is imported from `components/section-heading.tsx`

#### Scenario: No inline types in page file
- **WHEN** developer inspects `app/[lang]/page.tsx`
- **THEN** all types are imported from `types/` or `lib/`

#### Scenario: Page uses translations from translations.ts
- **WHEN** developer inspects `app/[lang]/page.tsx`
- **THEN** all localized strings are accessed via `t.resume.*` (from `translations[langKey]`)
- **AND** there are no inline ternary expressions for language switching (`lang === "es" ? "..." : "..."`)

### Requirement: Language switcher is a leaf client component
The language switcher SHALL be a separate `"use client"` component that uses `useRouter` to navigate between `/es` and `/en`, wrapped in a `<Suspense>` boundary with a Skeleton.

#### Scenario: Language switcher changes route
- **WHEN** user clicks "EN" in the language switcher while on `/es`
- **THEN** the browser navigates to `/en`
- **AND** the page content updates to English

#### Scenario: Language switcher has Suspense boundary
- **WHEN** the language switcher is rendered
- **THEN** it is wrapped in `<Suspense fallback={<Skeleton />}>`
- **AND** no layout shift occurs during initial hydration

### Requirement: Root route redirects to default language
The root path (`/`) SHALL redirect to `/es` (the default language) using `redirect()` in a Server Component.

#### Scenario: Root redirects
- **WHEN** a user visits `/`
- **THEN** the browser is redirected to `/es` with HTTP 307
