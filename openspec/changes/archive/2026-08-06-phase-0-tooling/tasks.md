## 1. ESLint Configuration

- [x] 1.1 Install `eslint`, `eslint-config-next`, `@typescript-eslint/parser`, and `@typescript-eslint/eslint-plugin` as devDependencies via pnpm
- [x] 1.2 Create `.eslintrc` with `next/core-web-vitals` extending `plugin:@typescript-eslint/recommended`
- [x] 1.3 Run `pnpm lint` and verify ESLint executes without configuration errors
- [x] 1.4 Document any lint violations found in existing code (do NOT fix them in this phase)

## 2. TypeScript Build Gates

- [x] 2.1 Remove `typescript.ignoreBuildErrors` from `next.config.mjs`
- [x] 2.2 Run `pnpm build` and verify it completes successfully (or document any TS errors found)
- [x] 2.3 Update `AGENTS.md` to reflect that `ignoreBuildErrors` is no longer active

## 3. Jest Setup

- [x] 3.1 Install `jest`, `jest-environment-jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@types/jest`, and `ts-jest` as devDependencies via pnpm
- [x] 3.2 Create `jest.config.ts` using `next/jest` with jsdom environment and `@/*` path alias mapping
- [x] 3.3 Create `jest.setup.ts` with global mocks for `next/font/google`, `next/image`, `next/navigation`, and `lucide-react`
- [x] 3.4 Add `"test": "jest"` script to `package.json`
- [x] 3.5 Create a smoke test (`__tests__/smoke.test.ts`) that verifies Jest + jsdom + React rendering works
- [x] 3.6 Run `pnpm test` and verify it passes

## 4. Validation

- [x] 4.1 Run `pnpm lint && pnpm test && pnpm build` in sequence
- [x] 4.2 Fix any gate failures that are configuration-related (not code-related)
- [x] 4.3 Document any remaining failures that stem from existing code in `AGENTS.md`
- [x] 4.4 Run `pnpm dev` and verify the app still starts and renders correctly
