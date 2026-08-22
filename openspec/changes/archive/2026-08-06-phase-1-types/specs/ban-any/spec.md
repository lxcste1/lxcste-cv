## ADDED Requirements

### Requirement: Zero occurrences of 'any' type
The project codebase (excluding `components/ui/` shadcn-generated code and test files) SHALL contain zero occurrences of the `any` type.

#### Scenario: No 'any' in app code
- **WHEN** developer searches for `: any` or `as any` or `as unknown as` patterns in `app/`, `components/` (excluding `ui/`), `lib/`, and `hooks/`
- **THEN** no matches are found

#### Scenario: Explicit types replace unsafe casts
- **WHEN** a value needs type assertion (e.g., `as unknown as string[]`)
- **THEN** it is replaced with an explicitly defined type that matches the source data structure

### Requirement: Build passes without any-related type errors
After removing all `any` usages, the project SHALL pass `pnpm build` and `pnpm lint --rule '@typescript-eslint/no-explicit-any: error'` without `any`-related errors.

#### Scenario: Build clean after any removal
- **WHEN** developer runs `pnpm build`
- **THEN** TypeScript compilation completes without errors related to missing types or unsafe `any` casts

#### Scenario: ESLint catches any usage
- **WHEN** developer introduces `any` in new code
- **THEN** `pnpm lint` reports it as an error
