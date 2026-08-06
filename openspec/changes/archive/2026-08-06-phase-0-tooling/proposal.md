## Why

El proyecto carece de tooling fundacional que `CODING_CONVENTIONS.md` asume como existente: ESLint no tiene configuración por lo que `pnpm lint` falla, TypeScript errors no bloquean el build (`ignoreBuildErrors: true`), y no hay framework de testing instalado ni configurado. Sin estos gates, las fases posteriores de reestructuración (RSC, hooks, tipos) no tienen red de seguridad.

## What Changes

- Crear configuración de ESLint (`.eslintrc`) con `next/core-web-vitals` + TypeScript parser para que `pnpm lint` funcione y sea un gate real.
- **BREAKING**: Deshabilitar `ignoreBuildErrors` en `next.config.mjs` — `pnpm build` fallará si hay errores de TypeScript.
- Instalar Jest, `@testing-library/react`, `@testing-library/jest-dom`, `jest-environment-jsdom`, `@types/jest` y configurar vía `next/jest`.
- Agregar script `"test": "jest"` al `package.json`.
- Configurar mocks globales para `next/image`, `next/navigation`, `next/font/google` en el setup de Jest.
- Verificar que los gates (`pnpm lint`, `pnpm test`, `pnpm build`) pasan después de la configuración.

## Capabilities

### New Capabilities
- `eslint-config`: Configuración de ESLint funcional con reglas de Next.js + TypeScript.
- `jest-setup`: Framework de testing con Jest, Testing Library, mocks de Next.js, y script `pnpm test`.
- `build-gates`: `pnpm build` falla ante errores de TypeScript (remover `ignoreBuildErrors`).

### Modified Capabilities
<!-- None — no existing specs to modify. -->

## Impact

- `package.json`: nuevas devDependencies (jest, testing-library, types), nuevo script `"test"`.
- `.eslintrc` (nuevo): configuración base de ESLint.
- `jest.config.ts` (nuevo): configuración de Jest vía `next/jest`.
- `next.config.mjs`: remover o setear a `false` la key `typescript.ignoreBuildErrors`.
- `tsconfig.json`: posiblemente agregar `jest` y `@testing-library/jest-dom` a `types` o `compilerOptions.types`.
