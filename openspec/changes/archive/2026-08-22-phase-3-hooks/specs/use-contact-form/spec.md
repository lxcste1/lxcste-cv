## ADDED Requirements

### Requirement: ContactForm logic is extracted to useContactForm hook
All form state management (`useState` for formData and status), event handlers (`handleChange`, `handleSubmit`), API calls (`fetch`), and side effects (`setTimeout`) SHALL be encapsulated in a custom hook `useContactForm` exported from `hooks/useContactForm.ts`.

#### Scenario: useContactForm returns form state
- **WHEN** `useContactForm(labels)` is called with translation labels
- **THEN** it returns `{ formData, status, statusMessage, handleChange, handleSubmit }` where `formData` has `{ name, email, subject, message }` initialized to empty strings

#### Scenario: handleChange updates formData
- **WHEN** `handleChange` is called with a change event for field "name" with value "Test"
- **THEN** `formData.name` is "Test" and other fields are unchanged

#### Scenario: handleSubmit sends fetch and updates status
- **WHEN** `handleSubmit` is called with a form event
- **THEN** `fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })` is called
- **AND** `status` transitions: `"loading"` -> `"success"` (on ok) or `"error"` (on failure)

#### Scenario: Success status auto-resets after 5 seconds
- **WHEN** status is `"success"`
- **THEN** after 5 seconds status resets to `"idle"`

#### Scenario: Error status auto-resets after 5 seconds
- **WHEN** status is `"error"`
- **THEN** after 5 seconds status resets to `"idle"`

### Requirement: ContactForm component is purely presentational
The `ContactForm` component SHALL contain zero `useState`, zero `useEffect`, zero `useReducer`, zero event handler functions (`handleChange`, `handleSubmit`), and zero `fetch` calls. It SHALL only consume values returned by `useContactForm()` and render JSX.

#### Scenario: ContactForm has no state or side effects
- **WHEN** developer inspects `components/contact-form.tsx`
- **THEN** the file does NOT contain `useState`, `useEffect`, or `fetch`
- **AND** the file imports `useContactForm` from `@/hooks/useContactForm`

#### Scenario: ContactForm renders identically after refactor
- **WHEN** a user fills and submits the contact form
- **THEN** the visual behavior is identical to before the refactor
- **AND** the form submission sends the same data to `/api/contact`
