## Why

El proyecto mezcla convenciones de nombres y estructuras para componentes propios, primitives generados por shadcn y hooks duplicados. Esta inconsistencia hace menos predecibles los imports y no permite co-localizar de forma uniforme los tests que se incorporaran en la siguiente fase.

## What Changes

- **BREAKING**: Reorganizar cada componente propio en `components/<kebab-case>/<PascalCase>.tsx` y actualizar todos sus imports internos.
- Reservar `components/ui/` exclusivamente para primitives generados por shadcn, sin mover ni renombrar sus archivos generados.
- Renombrar los hooks canónicos a `hooks/useMobile.ts` y `hooks/useToast.ts` y actualizar los imports de las primitives que los consumen.
- Eliminar las copias no referenciadas `components/ui/use-mobile.tsx` y `components/ui/use-toast.ts`.
- Actualizar `CODING_CONVENTIONS.md` para distinguir explícitamente la estructura de componentes propios de la estructura de shadcn.
- Mantener la funcionalidad, el renderizado y las rutas actuales sin cambios.

## Capabilities

### New Capabilities
- `source-organization`: Estructura y nomenclatura uniforme para componentes propios, hooks y primitives shadcn.

### Modified Capabilities

<!-- None. -->

## Impact

- Componentes propios bajo `components/`, sus imports desde `app/` y dependencias entre componentes.
- Hooks canónicos bajo `hooks/` e imports en `components/ui/sidebar.tsx` y `components/ui/toaster.tsx`.
- Archivos duplicados no usados bajo `components/ui/`.
- `CODING_CONVENTIONS.md` y futuras ubicaciones de tests co-localizados.
