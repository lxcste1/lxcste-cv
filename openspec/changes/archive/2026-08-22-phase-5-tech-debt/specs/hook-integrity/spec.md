# hook-integrity Specification (Delta)

## ADDED Requirements

### Requirement: Hooks pass lint without suppressions
Every file in `hooks/` SHALL pass `pnpm lint` with zero errors and zero eslint-disable suppressions.

#### Scenario: Lint clean hooks directory
- **WHEN** developer runs `pnpm lint`
- **THEN** no errors are reported for files under `hooks/`
- **AND** no `eslint-disable` comments exist in `hooks/`

### Requirement: Media query hook uses external store subscription
`hooks/useMobile.ts` SHALL derive viewport state via `useSyncExternalStore` instead of synchronously calling `setState` inside `useEffect`.

#### Scenario: No setState in effect
- **WHEN** developer inspects `hooks/useMobile.ts`
- **THEN** no `useState`/`useEffect` pair sets state synchronously during effect execution
- **AND** the `react-hooks/set-state-in-effect` rule reports no violation

#### Scenario: Server snapshot is stable
- **WHEN** the hook runs during SSR or hydration
- **THEN** it returns a deterministic server snapshot (`false`) and updates after mount without hydration mismatch
