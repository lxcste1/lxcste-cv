## ADDED Requirements

### Requirement: Jest test runner is configured
The project SHALL have Jest installed and configured via `next/jest` so that `pnpm test` executes tests using `jsdom` environment with `@testing-library/react` and `@testing-library/jest-dom` matchers.

#### Scenario: Test script runs without configuration errors
- **WHEN** developer runs `pnpm test`
- **THEN** Jest executes and scans for test files matching `*.test.ts` and `*.test.tsx`
- **AND** no configuration or module resolution errors are reported

#### Scenario: Jest resolves @/ path alias
- **WHEN** a test file imports a module using `@/lib/utils`
- **THEN** Jest resolves the import to `<project-root>/lib/utils.ts`

#### Scenario: Jest renders React components
- **WHEN** a test renders a React component using `render()` from `@testing-library/react`
- **THEN** the component is rendered in jsdom and `screen.getByText()` finds text content

#### Scenario: Jest provides DOM matchers
- **WHEN** a test asserts `expect(element).toBeInTheDocument()`
- **THEN** the assertion passes or fails based on DOM presence

### Requirement: Next.js internals are mocked globally
The project SHALL have global mocks for `next/font/google`, `next/image`, `next/navigation`, and `lucide-react` so that tests do not fail due to Next.js runtime dependencies.

#### Scenario: next/font/google mock returns stable class name
- **WHEN** a component uses `Inter({ subsets: ["latin"] })`
- **THEN** the mock returns `{ className: "mock-font", variable: "--mock-font" }`

#### Scenario: next/image mock renders an img element
- **WHEN** a component uses `<Image src="/test.png" alt="test" width={100} height={100} />`
- **THEN** the mock renders `<img src="/test.png" alt="test" />`

#### Scenario: next/navigation mock provides stable router
- **WHEN** a component uses `useRouter()` from `next/navigation`
- **THEN** the mock returns `{ push: jest.fn(), back: jest.fn(), prefetch: jest.fn() }`

#### Scenario: lucide-react icons render placeholder
- **WHEN** a component imports and renders any lucide-react icon
- **THEN** the mock renders a simple `<span data-icon="<icon-name>" />` placeholder
