# translation-hygiene Specification (Delta)

## ADDED Requirements

### Requirement: Translations contain only used keys
`lib/translations.ts` SHALL contain only translation keys referenced by application code. Legacy single-page design blocks and dead keys SHALL NOT remain.

#### Scenario: No legacy blocks remain
- **WHEN** developer inspects `lib/translations.ts` for either locale
- **THEN** top-level keys `hero`, `about`, `experience`, `skills`, `education` do not exist

#### Scenario: No dead loose keys remain
- **WHEN** developer inspects `lib/translations.ts` for either locale
- **THEN** `contact.info.phone`, `resume.nav`, `resume.availability`, and `resume.footerRole` do not exist

#### Scenario: Removed keys have no references
- **WHEN** developer runs `pnpm build` after removal
- **THEN** compilation succeeds, proving no code references deleted keys

### Requirement: Locales stay structurally identical
The `es` and `en` objects in `lib/translations.ts` SHALL have identical key structures at all nesting levels.

#### Scenario: Key parity between locales
- **WHEN** developer compares the key sets of `es` and `en` in `lib/translations.ts`
- **THEN** both locales expose exactly the same keys
