## Context

El proyecto sigue la convención de `CODING_CONVENTIONS.md` que requiere:
- Todos los tipos e interfaces en `types/`, nunca inline en `.tsx` o `.ts`.
- `interface` sobre `type` para Props y entidades de dominio; `type` solo para unions, intersections y utilities.
- `any` estrictamente prohibido.

Actualmente los tipos están dispersos: `Language` y `TranslationKey` en `lib/translations.ts`, `ContactFormData` inline en `app/api/contact/route.ts`, props interfaces inexistentes (los componentes no tienen props tipadas explícitamente), y `as unknown as string[]` en `app/projects/page.tsx`.

## Goals / Non-Goals

**Goals:**
- Todo tipo e interfaz del proyecto reside en `types/`.
- Cero ocurrencias de `any` en el código base.
- Props de componentes usan `interface`, no `type`.
- El build (`pnpm build`) y lint (`pnpm lint`) pasan después de la migración.

**Non-Goals:**
- Agregar nuevos tipos que no existan actualmente (solo extraer los existentes).
- Modificar la lógica de negocio o comportamiento de componentes.
- Mover tipos de shadcn/ui (`components/ui/`).

## Decisions

### Estructura de `types/`
Se adopta una estructura plana por dominio más un subdirectorio `components/` para props:

```
types/
├── language.ts           ← Language, TranslationKey
├── contact.ts            ← ContactFormData
├── resume.ts             ← Expertise, Experience, Technology (arrays tipados)
├── components/
│   ├── HeaderProps.ts
│   ├── FooterProps.ts
│   ├── ContactFormProps.ts
│   ├── ContactInfoProps.ts
│   ├── ProjectCardProps.ts
│   ├── HeroSectionProps.ts
│   ├── EducationSectionProps.ts
│   ├── ExperienceSectionProps.ts
│   ├── SkillsSectionProps.ts
│   ├── ResumeProps.ts
│   └── ThemeProviderProps.ts
```

**Alternativa considerada**: Un solo archivo `types/index.ts`. Descartada — escala mal con más de 5-6 tipos y hace los imports menos legibles.

### Props interfaces: export nombrado, una por archivo
Cada componente tiene su props interface exportada desde `types/components/<Component>Props.ts`. El nombre es `<Component>Props` (PascalCase, sin prefijos `I`/`T`). Esto sigue la convención de naming de `CODING_CONVENTIONS.md`.

**Alternativa considerada**: Un solo archivo `types/components.ts` con barrel exports. Descartada — no escala y mezcla dominios.

### Auditoría `interface` vs `type`
Se auditan todos los archivos `.ts` y `.tsx` del proyecto (excluyendo `components/ui/` shadcn). Si un `type` define Props o entidades de dominio, se migra a `interface`. Si es union/intersection/utility, se mantiene como `type`.

Ejemplo de migración:
```ts
// Antes
type HeaderProps = { language: Language; setLanguage: ... };

// Después
interface HeaderProps { language: Language; setLanguage: ... }
```

### Eliminación de `any`
El único uso de `any` detectado es `as unknown as string[]` en `app/projects/page.tsx`. Se reemplaza tipando correctamente el `ProjectCard` para aceptar `readonly string[]` (o el tipo preciso que proviene de `translations.ts`).

## Risks / Trade-offs

- **[Riesgo] Imports rotos por reubicación de tipos** → Mitigación: después de cada migración, ejecutar `pnpm build` para verificar que todos los imports resuelven correctamente.
- **[Riesgo] Componentes sin props explícitas pueden no necesitar interfaz** → Mitigación: si un componente no recibe props (ej: `Footer`), no se crea interfaz vacía. Solo se extraen props que existen.
- **[Riesgo] shadcn/ui components pueden tener `type` para Props** → No se modifican. La convención aplica al código propio, no a código generado.
