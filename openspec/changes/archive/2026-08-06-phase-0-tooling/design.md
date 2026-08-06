## Context

El proyecto actual tiene `"lint": "eslint ."` en `package.json` pero no existe ninguna configuración de ESLint (ni `.eslintrc`, ni `eslint.config.mjs`, ni `eslint` en `package.json`). Ejecutar `pnpm lint` falla inmediatamente. Además, `next.config.mjs` tiene `typescript.ignoreBuildErrors: true`, lo que significa que `pnpm build` no bloquea errores de TypeScript, contradiciendo `CODING_CONVENTIONS.md`. Por último, no hay framework de testing instalado — `CODING_CONVENTIONS.md` exige Jest + Testing Library con tests co-localizados y snapshots.

## Goals / Non-Goals

**Goals:**
- Que `pnpm lint` ejecute ESLint sobre el código y reporte problemas reales.
- Que `pnpm build` falle ante errores de TypeScript.
- Que `pnpm test` exista como script y ejecute Jest con soporte para React, TSX, y mocks de Next.js.
- Que los tres gates pasen sobre el estado actual del código.

**Non-Goals:**
- Agregar reglas de linting adicionales más allá de las recomendadas por Next.js.
- Escribir tests para código existente (eso es fase 6).
- Modificar código para que pase lint/build (solo se configura el tooling). Si algo falla, se documenta como deuda técnica.
- Configurar CI (no hay `.github/` workflow).

## Decisions

### ESLint: formato plano `.eslintrc` tradicional
Se elige `.eslintrc` (JSON/JS) en lugar de flat config (`eslint.config.mjs`) porque `next/core-web-vitals` tiene soporte nativo para el formato legacy y el proyecto no tiene ninguna configuración previa que migrar. Si Next.js migra a flat config por default en el futuro, se actualizará.

- **Alternativa considerada**: `eslint.config.mjs` (flat config). Descartada porque Next.js 16 aún recomienda el formato legacy en su documentación y el parser de TypeScript tiene mejor integración.

### Jest: configuración vía `next/jest`
Se usa `next/jest` (el helper oficial de Next.js) para no tener que configurar manualmente transforms para JSX/TSX, path aliases (`@/*`), ni module resolution de CSS modules. Esto garantiza compatibilidad con la versión de Next.js del proyecto.

- **Alternativa considerada**: `vitest`. Descartada porque `CODING_CONVENTIONS.md` especifica explícitamente Jest.

### Mocks: archivo `jest.setup.ts` con mocks declarados al inicio
Los mocks de `next/font/google`, `next/image`, `next/navigation` y `lucide-react` se configuran en el archivo `setupFilesAfterFramework` para que estén disponibles en todos los tests sin imports explícitos. Cada mock devuelve valores estables y predecibles.

### `ignoreBuildErrors`: simplemente remover la key
Se elimina la key `typescript.ignoreBuildErrors` de `next.config.mjs` en lugar de setearla a `false`, ya que el default de Next.js es `false`. Esto mantiene el archivo de configuración mínimo.

## Risks / Trade-offs

- **[Riesgo] `pnpm lint` puede reportar errores en código existente** → Se ejecuta `pnpm lint` después de configurar. Si hay errores, se documentan en tasks.md pero no se corrigen (fuera de scope de fase 0).
- **[Riesgo] `pnpm build` puede fallar con errores de TS existentes** → El proyecto ya compilaba con TS estricto (`"strict": true`), solo que el build los ignoraba. Se verifica y se documentan los errores si los hay.
- **[Riesgo] `@types/jest` puede tener conflictos de versión con TypeScript 5.7** → Se usa la última versión compatible. Si falla, se pinnea una versión específica.
