## Context

`CODING_CONVENTIONS.md` exige maximizar RSC: "All components, layouts, and pages MUST be Server Components by default." Actualmente todas las páginas son Client Components. El contenido es 100% estático (traducciones en `translations.ts`, sin datos de usuario, sin auth). El plan de reestructuración establece SSG como estrategia para las tres rutas.

El language context (`lib/language-context.tsx`) es `"use client"` y usa `useState`. El desafío es desacoplar el estado del idioma de los componentes que solo leen datos, para que estos puedan ser Server Components.

## Goals / Non-Goals

**Goals:**
- `/`, `/projects`, `/contact` renderizan como SSG (`pnpm build` muestra `○ Static`).
- Solo los leaf components que requieren interactividad tienen `"use client"`.
- El language switcher funciona igual que antes (cambio de idioma instantáneo).
- Layout shifts prevenidos con `<Suspense>` + `Skeleton` para client components.

**Non-Goals:**
- Agregar ISR o SSR (innecesario para contenido estático).
- Cambiar el diseño visual o comportamiento de usuario.
- Migrar `components/ui/` shadcn (código generado).
- Implementar `next/image` en lugar de `<img>` (eso es fase 7).

## Decisions

### Estrategia de idioma: prop drilling + leaf client switcher
El `useLanguage()` hook se usa en ~12 componentes para leer traducciones. Para que sean Server Components, el idioma debe pasarse como prop desde un parent que lo conozca.

**Enfoque**: `app/layout.tsx` sigue siendo un wrapper del `LanguageProvider` (client context). Las páginas individuales pasan `language` como prop a sus hijos. El `LanguageSwitcher` es un leaf client component que llama a `setLanguage` y dispara un refresh del server component tree.

**Alternativa considerada**: `generateStaticParams` por idioma sin context. Elegida: Next.js soporta `generateStaticParams` en Server Components. Cada build genera una página estática por idioma. El runtime solo hidrata el language switcher. El cambio de idioma navega a `/es` o `/en`.

**Ruta final elegida**: Usar `Layout` como Server Component + `LanguageProvider` como wrapper client. El `LanguageSwitcher` usa `useRouter` para cambiar de ruta `/es` ↔ `/en`. Esto elimina el `useLanguage()` de la mayoría de componentes — en su lugar, las páginas leen `params.lang` y pasan las traducciones como props estáticas.

### Home: SSG con separación de responsabilidades
`app/page.tsx` → redirect a `/es`. El contenido real vive en `app/[lang]/page.tsx` como Server Component con `generateStaticParams([{ lang: "es" }, { lang: "en" }])`.

**Separación de responsabilidades (SRP):**
- `translations.ts` — todas las strings localizables bajo la key `resume.*` (eyebrows, títulos, descripciones).
- `lib/resume-data.ts` — arrays de datos invariantes al idioma: `experience` (companies, stacks), `technologies` (tech items por categoría), y sus versiones localizadas para ES (`localizedExperience`, `localizedTechnology`).
- `components/section-heading.tsx` — subcomponente extraído del viejo resume (`<div className="section-heading"><span>...</span><h2>...</h2></div>`).
- `app/[lang]/page.tsx` — orquestador: lee `translations[langKey]`, importa datos de `lib/resume-data.ts`, renderiza markup con `t.resume.*`. Igual que projects y contact.

**Justificación**: La versión anterior acumulaba arrays, helpers y types en el page file, violando single responsibility. Con esta separación el page no define nada — solo orquesta.

### Header/Footer: Server Components con props
Header y Footer reciben `lang` como prop desde `layout.tsx`. El language switcher se extrae a `LanguageSwitcher.tsx` (client) y se pasa como `children` desde el layout. El mobile menu (que usa `useState`) también se extrae a `MobileMenu.tsx` (client).

### ContactForm: mantiene "use client"
El formulario usa `useState`, `onSubmit`, `fetch` — requiere `"use client"`. Se envuelve en `<Suspense fallback={<FormSkeleton />}>` en la página `/contact` para prevenir layout shift.

### ProjectCard: pierde "use client"
`ProjectCard` solo renderiza datos y links. El `console.log(imageUrl)` (debug) se elimina. El hover effect (`group-hover`) es puro CSS, no necesita JS. La condición `isInDevelopment` se resuelve en build time.

## Risks / Trade-offs

- **[Riesgo] Cambio de idioma recarga la página** → El cambio de `/es` a `/en` implica una navegación completa, perdiendo la instantaneidad del context actual. Mitigación: el SSG hace que la página cargue en < 100ms; el cambio es imperceptible. Alternativa mejor: usar middleware para detectar el idioma del navegador.
- **[Riesgo] Ruta `/` redirige vs. contiene contenido** → Si usamos `[lang]` dynamic route, la ruta raíz `/` necesita redirigir a `/es`. Mitigación: `app/page.tsx` redirige a `/es` con `redirect()` en server component (Next.js 16 soporta esto).
- **[Riesgo] Comportamiento visual diferente entre client/server render** → Los client components con Suspense pueden mostrar el skeleton por frames durante hidratación. Mitigación: mantener el skeleton visualmente idéntico al componente final en dimensiones.
- **[Riesgo] header.tsx usa `useLanguage()` → state** → El header tiene lógica de mobile menu (`useState`) y language switcher (`useLanguage`). Mitigación: extraer ambas piezas a leaf client components; el shell del header es server.
