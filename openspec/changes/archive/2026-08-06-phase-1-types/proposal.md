## Why

El proyecto define tipos inline en archivos `.tsx` y `.ts`, violando `CODING_CONVENTIONS.md` que exige que todos los tipos vivan en `types/`. Además, se usa `type` para Props en lugar de `interface`, existe un cast `as unknown as string[]` que equivale a `any` (prohibido), y no hay un directorio centralizado para tipos. Sin esto, las fases posteriores (RSC, hooks) introducirán más tipos dispersos.

## What Changes

- Crear directorio `types/` con subdirectorios `types/components/` para props de componentes.
- Migrar `Language` y `TranslationKey` desde `lib/translations.ts` a `types/language.ts`.
- Migrar `ContactFormData` desde `app/api/contact/route.ts` a `types/contact.ts`.
- Extraer interfaces de props de todos los componentes a `types/components/<Component>Props.ts`.
- Extraer tipos de arrays tipados (`expertise`, `experience`, `technologies`) desde `components/resume.tsx` a `types/resume.ts`.
- **BREAKING**: Eliminar todo uso de `any`, incluyendo el cast `as unknown as string[]` en `app/projects/page.tsx`.
- Auditar y migrar: `type` → `interface` para Props y entidades de dominio; mantener `type` solo para unions, intersections y utilities.
- Actualizar imports en todos los archivos afectados.

## Capabilities

### New Capabilities
- `type-directory`: Directorio `types/` como ubicación centralizada de todas las interfaces y tipos del proyecto.
- `type-extraction`: Todas las interfaces de Props, tipos de dominio, y tipos de datos viven en `types/` — nunca inline.
- `ban-any`: Cero usos de `any` en el código base. Todo cast o tipo está explícitamente definido.

### Modified Capabilities
<!-- No existing type-related specs to modify. -->

## Impact

- `lib/translations.ts`: exporta tipos desde `types/language.ts` en lugar de definirlos.
- `app/api/contact/route.ts`: importa `ContactFormData` desde `types/contact.ts`.
- `components/resume.tsx`: importa tipos de arrays desde `types/resume.ts`.
- `app/projects/page.tsx`: elimina cast `as unknown as string[]`.
- Todos los componentes (aprox. 12): props interfaces extraídas a `types/components/`.
- `hooks/use-mobile.ts`, `hooks/use-toast.ts`: verificar si tienen tipos inline.
- `lib/language-context.tsx`: importa `Language`, `TranslationKey` desde `types/`.
