## ADDED Requirements

### Requirement: Build fails on TypeScript errors
The project SHALL have `typescript.ignoreBuildErrors` set to `false` (or removed, since `false` is the default) in `next.config.mjs` so that `pnpm build` exits with a non-zero code when TypeScript compilation errors exist.

#### Scenario: Build fails on TS error
- **WHEN** a `.tsx` file contains a TypeScript type error (e.g., missing required prop)
- **AND** developer runs `pnpm build`
- **THEN** the build fails with a non-zero exit code
- **AND** the error message identifies the file and the type violation

#### Scenario: Build succeeds on clean code
- **WHEN** all `.ts` and `.tsx` files are free of TypeScript errors
- **AND** developer runs `pnpm build`
- **THEN** the build completes successfully with exit code 0

### Requirement: All gates run without errors
After tooling is configured, the project SHALL pass `pnpm lint`, `pnpm test`, and `pnpm build` in sequence without failures, OR remaining failures SHALL be documented as known debt.

#### Scenario: Gates pass on clean state
- **WHEN** developer runs `pnpm lint && pnpm test && pnpm build`
- **THEN** all three commands complete without errors, OR any failures are documented in `AGENTS.md` as known exceptions

#### Scenario: Build detects real production issues
- **WHEN** a PR introduces a TypeScript type error
- **AND** CI (or developer) runs `pnpm build`
- **THEN** the build fails, preventing the PR from being merged
