## Why

Todas las páginas del proyecto son Client Components (`"use client"`), violando `CODING_CONVENTIONS.md` que exige maximizar RSC. La home (`/`), /projects, y /contact son 100% client-side — no hay SSG, ISR ni SSR. El contenido es estático e igual para todos los usuarios, lo que las hace candidatas ideales para SSG. Mantenerlas como client components implica JS innecesario en el bundle, peor LCP, y layout shifts evitables.

## What Changes

### Home (`/`)
- **BREAKING**: `app/page.tsx` pasa de Client Component a Server Component (SSG).
- **BREAKING**: Se elimina `components/resume.tsx`. Todo su contenido se mueve inline a `app/[lang]/page.tsx`. El wrapper `Resume` no aporta valor — `page.tsx` solo hacía `return <Resume />`.
- Se crea `components/language-switcher.tsx` como leaf client component (solo botones ES/EN).
- Se crea `components/section-heading.tsx` — subcomponente extraído del viejo resume, reutilizable.
- Se crea `lib/resume-data.ts` con los arrays de datos invariantes (`experience`, `technologies`).
- Las strings localizables van a `translations.ts` bajo la key `resume.*` (eyebrows, títulos, descripciones).
- `app/[lang]/page.tsx` es un orquestador limpio: lee `params.lang`, carga `t = translations[langKey]`, importa los datos de `lib/resume-data.ts`, y renderiza markup usando `t.resume.*`. Sin arrays, sin helpers, sin types inline — igual que projects y contact.
- `generateStaticParams` produce una página estática por idioma (`es`, `en`).
- El language switcher se envuelve en `<Suspense>` con `<Skeleton>`.

### `/projects`
- `app/projects/page.tsx` pasa a Server Component (SSG).
- `components/project-card.tsx` pierde `"use client"` (solo renderiza datos y links, sin interactividad).
- `components/header.tsx` y `components/footer.tsx` pierden `"use client"` si es posible, o se extraen los elementos interactivos (language switcher, mobile menu) en leaf client components.

### `/contact`
- `app/contact/page.tsx` pasa a Server Component (SSG).
- `components/contact-form.tsx` mantiene `"use client"` (formulario con estado, `onSubmit`, `fetch`).
- `components/contact-info.tsx` pierde `"use client"`.
- El formulario se envuelve en `<Suspense>` con `<Skeleton>` para prevenir layout shift.

### Componentes transversales
- `components/footer.tsx`: pierde `"use client"` — solo usa `useLanguage()` y `Date`, ambos pueden ser props desde un parent server component.
- `components/header.tsx`: el language switcher y mobile menu se extraen a leaf client components; el resto es server.

## Capabilities

### New Capabilities
- `rsc-home`: Página home renderizada como SSG con `generateStaticParams` para ES/EN, language switcher como leaf client component con Suspense+Skeleton.
- `rsc-projects`: Página /projects como SSG puro, ProjectCard como server component.
- `rsc-contact`: Página /contact como SSG, ContactForm mantiene `"use client"` envuelto en Suspense+Skeleton.
- `rsc-shared`: Header y Footer son Server Components; elementos interactivos (language switcher, mobile menu) son leaf client components.

### Modified Capabilities
<!-- No existing specs to modify. -->

## Impact

- `app/page.tsx` — redirect server component a `/es`.
- `app/[lang]/page.tsx` — orquestador limpio: carga traducciones, importa datos, renderiza markup con `t.resume.*`. Sin arrays, helpers ni types inline.
- `components/section-heading.tsx` — nuevo, extraído del viejo resume.
- `lib/resume-data.ts` — nuevo, arrays invariantes (`experience`, `technologies`).
- `components/resume.tsx` — **ELIMINADO**.
- `components/language-switcher.tsx` — nuevo leaf client component.
- `app/projects/page.tsx` — pierde `"use client"`.
- `components/project-card.tsx` — pierde `"use client"` (solo si no tiene interactividad).
- `components/header.tsx` — pierde `"use client"`, extrae mobile menu + language switcher a leaf components.
- `components/footer.tsx` — pierde `"use client"`, recibe props.
- `app/contact/page.tsx` — pierde `"use client"`.
- `components/contact-info.tsx` — pierde `"use client"`.
- `components/contact-form.tsx` — mantiene `"use client"`, envuelto en Suspense+Skeleton.
- Nuevos archivos: `components/language-switcher.tsx`, `components/mobile-menu.tsx`, `components/form-skeleton.tsx`.
