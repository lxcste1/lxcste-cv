## Context

Los diez componentes propios del proyecto viven actualmente como archivos planos en `components/` con nombres en `kebab-case`. En contraste, `components/ui/` contiene 57 primitives generados por shadcn, incluidos dos hooks duplicados que no se importan. Los imports de la aplicación y de algunas primitives apuntan a las ubicaciones actuales.

La fase debe normalizar la organización sin cambiar las rutas de Next.js, el comportamiento de la interfaz ni la API de contacto. La fase 5 incorporara la cobertura de tests que aún falta, por lo que la estructura resultante debe permitir tests co-localizados.

## Goals / Non-Goals

**Goals:**

- Ubicar cada componente propio en `components/<kebab-case>/<PascalCase>.tsx`.
- Reservar `components/ui/` a los primitives generados por shadcn y preservar su estructura compatible con el generador.
- Consolidar `useIsMobile` y `useToast` en `hooks/` con filenames en `camelCase`.
- Eliminar únicamente las copias duplicadas no importadas de los hooks en `components/ui/`.
- Actualizar documentación e imports para que no queden referencias a rutas antiguas.

**Non-Goals:**

- Renombrar, mover, modificar o añadir tests para los 57 primitives de shadcn.
- Alterar el markup, los estilos, el estado, la navegación, las rutas de Next.js o las respuestas de la API.
- Corregir otras desviaciones de convenciones que no sean de organización o naming.
- Implementar la cobertura pendiente de componentes, features y hooks; corresponde a la fase 5.

## Decisions

### Componentes propios en carpetas de dominio

Cada archivo propio bajo `components/` se moverá a una carpeta cuyo nombre es su identidad en `kebab-case`, con la implementación en PascalCase: por ejemplo, `components/contact-form/ContactForm.tsx`.

Esto separa con claridad el código de la aplicación de los primitives de diseño y permite añadir `__tests__/` junto al componente en la fase 5. Se actualizarán los imports desde `app/` y los imports entre componentes en el mismo cambio. Se descarta agrupar todos los componentes propios bajo `components/ui/`, porque mezcla componentes de dominio con el código generado por shadcn.

### Excepción explícita para shadcn

`components/ui/` queda reservado exclusivamente a los primitives generados por shadcn. Sus archivos planos actuales en `kebab-case` se mantienen sin cambios para conservar la compatibilidad con el generador y limitar la superficie de la migración.

La convención se actualizará para expresar esta excepción. Se descarta mover o renombrar los 57 archivos de shadcn: no mejora el comportamiento de la aplicación y haría más costosas futuras actualizaciones del generador.

### Hooks canónicos bajo hooks/

`hooks/use-mobile.ts` y `hooks/use-toast.ts` se renombrarán a `hooks/useMobile.ts` y `hooks/useToast.ts`. Las primitives que los consumen actualizarán sus aliases. Las copias byte a byte no referenciadas bajo `components/ui/` se eliminarán en lugar de mantener dos fuentes de verdad.

Se descarta conservar los hooks bajo `components/ui/`: no son primitives visuales y contradicen la convención de ubicación y naming de hooks.

## Risks / Trade-offs

- **[Riesgo] Un import conserva una ruta anterior** → Mitigación: buscar referencias a cada path legado y validar con TypeScript, Jest y build.
- **[Riesgo] Git no detecta movimientos que solo cambian capitalización en sistemas case-insensitive** → Mitigación: efectuar movimientos con nombres de carpeta distintos y verificar el árbol final; el entorno de CI Linux resolverá los paths por capitalización exacta.
- **[Riesgo] Se elimina un hook consumido indirectamente** → Mitigación: comprobar que las copias en `components/ui/` no tienen referencias antes de eliminarlas y conservar las implementaciones canónicas de `hooks/`.
- **[Trade-off] Los primitives shadcn conservan una excepción de naming** → Mitigación: documentarla explícitamente y evitar colocar código propio en `components/ui/`.

## Migration Plan

1. Actualizar las reglas de organización en `CODING_CONVENTIONS.md`.
2. Mover los diez componentes propios a sus carpetas y actualizar imports.
3. Renombrar los hooks canónicos, actualizar los dos consumidores shadcn y eliminar las copias no usadas.
4. Buscar rutas legadas y ejecutar `pnpm lint`, `pnpm test` y `pnpm build`.

La migración no requiere despliegue escalonado ni migración de datos. Si una validación falla, se revierte el conjunto completo de movimientos e imports como una unidad, manteniendo los paths anteriores consistentes.

## Open Questions

<!-- None. The shadcn exception and hook consolidation were agreed during phase analysis. -->
