## ADDED Requirements

### Requirement: Centralized type directory exists
The project SHALL have a `types/` directory at the project root containing all type and interface definitions, organized by domain with a `types/components/` subdirectory for component props.

#### Scenario: types/ directory exists
- **WHEN** developer navigates to the project root
- **THEN** `types/` directory exists with at least `types/language.ts`, `types/contact.ts`, `types/resume.ts`, and `types/components/` subdirectory

#### Scenario: No types defined outside types/
- **WHEN** developer searches for `interface` or `type` definitions in `components/`, `lib/`, or `app/` (excluding `components/ui/` shadcn code)
- **THEN** no type definitions are found inline — all are imported from `types/`

### Requirement: types/ follows naming conventions
All files and identifiers in `types/` SHALL follow the naming conventions from CODING_CONVENTIONS.md: files in camelCase (e.g., `contact.ts`), interfaces in PascalCase without `I`/`T` prefixes (e.g., `ContactFormData`), props interfaces named `<Component>Props`.

#### Scenario: Props interface naming
- **WHEN** a component `ContactForm` has props
- **THEN** its interface is exported as `ContactFormProps` from `types/components/ContactFormProps.ts`
