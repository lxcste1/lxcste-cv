## 1. Create useContactForm hook

- [x] 1.1 Create `hooks/useContactForm.ts` with `useContactForm(labels)` — encapsulates `formData`, `status`, `handleChange`, `handleSubmit`, `fetch`, timeouts

## 2. Refactor ContactForm component

- [x] 2.1 Remove `useState`, `handleChange`, `handleSubmit`, `fetch`, and `setTimeout` from `components/contact-form.tsx`
- [x] 2.2 Import and call `useContactForm(labels)` in `ContactForm`
- [x] 2.3 Destructure `{ formData, status, statusMessage, handleChange, handleSubmit }` from the hook

## 3. Validate

- [x] 3.1 Run `pnpm build` — verify zero TypeScript errors
- [x] 3.2 Run `pnpm lint` — verify zero new violations
- [x] 3.3 Run `pnpm test` — verify all tests pass
- [x] 3.4 Run `pnpm dev` — verify contact form submits correctly
