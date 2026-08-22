## ADDED Requirements

### Requirement: Header is a Server Component
The `Header` component SHALL be a Server Component that receives `lang` and translated nav labels as props, with interactive elements (language switcher, mobile menu) extracted as leaf client components.

#### Scenario: Header has no client directive
- **WHEN** developer inspects `components/header.tsx`
- **THEN** the file does NOT contain `"use client"` directive
- **AND** does NOT call `useLanguage()` directly

#### Scenario: Header renders navigation links
- **WHEN** Header receives `nav` props with `home`, `projects`, `contact` labels
- **THEN** it renders `<Link>` elements with the correct translated text

### Requirement: Footer is a Server Component
The `Footer` component SHALL be a Server Component that receives `rights` translated text as a prop.

#### Scenario: Footer has no client directive
- **WHEN** developer inspects `components/footer.tsx`
- **THEN** the file does NOT contain `"use client"` directive
- **AND** does NOT call `useLanguage()`

### Requirement: Mobile menu is a leaf client component
The mobile navigation menu (hamburger toggle + mobile links) SHALL be a separate `"use client"` component extracted from `Header`.

#### Scenario: MobileMenu toggles visibility
- **WHEN** user clicks the hamburger icon on mobile viewport
- **THEN** the mobile navigation links become visible
- **WHEN** user clicks again
- **THEN** the mobile navigation links hide

#### Scenario: MobileMenu has no layout shift
- **WHEN** the mobile menu component hydrates on page load
- **THEN** no visible layout shift occurs (it starts hidden by default)
