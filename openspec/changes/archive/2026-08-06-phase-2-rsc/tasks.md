## 1. Language routing infrastructure

- [x] 1.1 Create `app/[lang]/` directory structure (coloca todas las páginas bajo `[lang]`)
- [x] 1.2 Create `app/[lang]/layout.tsx` — Server Component que pasa `lang` a los hijos y envuelve en `LanguageProvider`
- [x] 1.3 Create `app/page.tsx` — redirect Server Component que usa `redirect("/es")`
- [x] 1.4 Create `app/[lang]/page.tsx` — SSG con `generateStaticParams` para `[{ lang: "es" }, { lang: "en" }]`

## 2. Leaf client components (extraer interactividad)

- [x] 2.1 Create `components/language-switcher.tsx` — leaf client component con `useRouter` para `/<lang>` navigation
- [x] 2.2 Create `components/mobile-menu.tsx` — leaf client component extraído de Header (toggle + mobile nav links)
- [x] 2.3 Create `components/form-skeleton.tsx` — skeleton placeholder para ContactForm

## 3. Server-component migration — Home (refactor)

- [x] 3.1 Add `resume` key to `translations.ts` (ES and EN) with all strings needed by the home page: nav, hero, currently, profile, experienceSection, expertise, ai, projectsSection, technology, education, cta, footerRole
- [x] 3.2 Create `lib/resume-data.ts` — arrays invariantes: `experience`, `technologies`, y sus versiones localizadas (`localizedExperience`, `localizedTechnology`)
- [x] 3.3 Create `components/section-heading.tsx` — subcomponente extraído del viejo resume
- [x] 3.4 Refactor `app/[lang]/page.tsx` — orquestador limpio: importa `translations[langKey]`, `lib/resume-data`, renderiza con `t.resume.*`, sin arrays/helpers/types inline
- [x] 3.5 Delete `components/resume.tsx` (confirmar eliminado)

## 4. Server-component migration — Projects

- [x] 4.1 Remove `"use client"` from `app/projects/page.tsx` → move to `app/[lang]/projects/page.tsx` as Server Component
- [x] 4.2 Remove `"use client"` from `components/project-card.tsx` — receive translated labels as props
- [x] 4.3 Remove `console.log(imageUrl)` debug line from `components/project-card.tsx`

## 5. Server-component migration — Contact

- [x] 5.1 Move `app/contact/page.tsx` → `app/[lang]/contact/page.tsx` as Server Component (no `"use client"`)
- [x] 5.2 Remove `"use client"` from `components/contact-info.tsx` — receive translated labels as props
- [x] 5.3 Wrap `ContactForm` in `<Suspense fallback={<FormSkeleton />}>` in the contact page

## 6. Server-component migration — Shared (Header, Footer)

- [x] 6.1 Remove `"use client"` from `components/header.tsx` — receive nav labels and lang as props
- [x] 6.2 Replace mobile menu logic with imported `<MobileMenu>` component in Header
- [x] 6.3 Replace language switcher markup with `<Suspense><LanguageSwitcher /></Suspense>` in Header
- [x] 6.4 Remove `"use client"` from `components/footer.tsx` — receive `rights` text as prop

## 7. Update imports and page references

- [x] 7.1 Update `app/layout.tsx` — remove pages that moved under `[lang]`, adjust children structure
- [x] 7.2 Update all internal links (`href="/"` → `href="/<lang>"`) in Header, Footer, ProjectCard, HeroSection
- [x] 7.3 Update `components/hero-section.tsx` links from `/projects`, `/contact` to use `lang` prefix

## 8. Validate

- [x] 8.1 Run `pnpm build` and verify all routes show `○ (Static)` except `/api/contact` (`ƒ`)
- [x] 8.2 Run `pnpm lint` and verify zero new violations
- [x] 8.3 Run `pnpm test` and verify all tests pass (update tests if needed for new component signatures)
- [x] 8.4 Run `pnpm dev` and manually verify language switching, navigation, and contact form work correctly
