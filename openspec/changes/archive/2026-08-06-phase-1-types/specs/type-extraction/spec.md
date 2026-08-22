## ADDED Requirements

### Requirement: Language types live in types/language.ts
The `Language` and `TranslationKey` types SHALL be defined in `types/language.ts` and re-exported from `lib/translations.ts` for backward compatibility.

#### Scenario: Language type importable from types/language
- **WHEN** a module imports `Language` from `@/types/language`
- **THEN** the import resolves to the correct union type `"es" | "en"`

#### Scenario: TranslationKey type importable from types/language
- **WHEN** a module imports `TranslationKey` from `@/types/language`
- **THEN** the import resolves to the correct translation object type

### Requirement: Contact form types live in types/contact.ts
The `ContactFormData` interface SHALL be defined in `types/contact.ts` and imported by `app/api/contact/route.ts`.

#### Scenario: ContactFormData importable
- **WHEN** `app/api/contact/route.ts` imports `ContactFormData` from `@/types/contact`
- **THEN** the interface has fields `name`, `email`, `subject`, `message` all typed as `string`

### Requirement: Resume data types live in types/resume.ts
Arrays with complex shapes defined in `components/resume.tsx` (`expertise`, `experience`, `technologies`) SHALL have their types extracted to `types/resume.ts`.

#### Scenario: Experience type is defined
- **WHEN** `components/resume.tsx` imports from `@/types/resume`
- **THEN** an `ExperienceItem` interface exists with `company`, `role`, `period`, `description`, `stack` fields
- **AND** an `Expertise` type alias (string array) exists
- **AND** a `TechnologyCategory` type or interface exists for the technology arrays

### Requirement: Component props interfaces live in types/components/
Every custom component that receives props SHALL have its props interface defined in `types/components/<Component>Props.ts` using `interface` (not `type`).

#### Scenario: Each component has its props interface
- **WHEN** developer inspects `types/components/`
- **THEN** for each component in `components/` that receives props (Header, Footer, ContactForm, ContactInfo, ProjectCard, HeroSection, EducationSection, ExperienceSection, SkillsSection, Resume, ThemeProvider), a corresponding `<Component>Props.ts` file exists

#### Scenario: Props interfaces use 'interface' keyword
- **WHEN** developer opens any `types/components/<Component>Props.ts`
- **THEN** the props structure is declared with `interface <Component>Props { ... }` never `type <Component>Props = { ... }`
