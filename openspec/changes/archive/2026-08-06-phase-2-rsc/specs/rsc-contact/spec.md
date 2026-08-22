## ADDED Requirements

### Requirement: Contact page renders as static generation
The `/contact` page SHALL be a Server Component using SSG, with the `ContactForm` as the only `"use client"` leaf component.

#### Scenario: Contact page is statically generated
- **WHEN** developer runs `pnpm build`
- **THEN** the route shows `○ (Static)` in the build output

#### Scenario: Contact page does not use client directive
- **WHEN** developer inspects `app/contact/page.tsx`
- **THEN** the file does NOT contain `"use client"` directive

### Requirement: ContactForm is wrapped in Suspense
The `ContactForm` component (which MUST remain `"use client"` for form state) SHALL be wrapped in a `<Suspense fallback={<FormSkeleton />}>` boundary in the contact page.

#### Scenario: ContactForm has Suspense boundary
- **WHEN** the contact page renders
- **THEN** the ContactForm is wrapped in `<Suspense>`
- **AND** a FormSkeleton matching the form dimensions is shown during loading

### Requirement: ContactInfo is a Server Component
The `ContactInfo` component SHALL be a Server Component that renders contact details without client hooks.

#### Scenario: ContactInfo has no client directive
- **WHEN** developer inspects `components/contact-info.tsx`
- **THEN** the file does NOT contain `"use client"` directive
- **AND** does NOT call `useLanguage()`
