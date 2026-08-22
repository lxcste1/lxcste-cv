## ADDED Requirements

### Requirement: ESLint is configured with Next.js rules
The project SHALL have a working ESLint configuration that includes TypeScript parser and Next.js Core Web Vitals rules, so that `pnpm lint` executes without configuration errors.

#### Scenario: Lint runs successfully
- **WHEN** developer runs `pnpm lint`
- **THEN** ESLint parses all `.ts` and `.tsx` files under the project root
- **AND** no configuration-related errors are reported

#### Scenario: ESLint catches lint violations
- **WHEN** a `.tsx` file contains an unused variable
- **THEN** `pnpm lint` reports the violation with a non-zero exit code

#### Scenario: ESLint respects TypeScript rules
- **WHEN** a `.tsx` file uses `any` type
- **THEN** `pnpm lint` reports the violation if the rule is configured
