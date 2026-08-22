## Why

`components/contact-form.tsx` declara `useState` (form data y status), un `handleChange`, un `handleSubmit` con `fetch` y `setTimeout` directamente en el cuerpo del componente. `CODING_CONVENTIONS.md` exige: "Zero state in the view. All business logic, complex state management, API calls, and event handling MUST be extracted into a dedicated Custom Hook."

## What Changes

- Crear `hooks/use-contact-form.ts` — custom hook que encapsula: `formData`, `status`, `handleChange`, `handleSubmit`, y la lógica de `fetch` + timeouts.
- Refactor `components/contact-form.tsx` para que sea puramente presentacional: solo consume `{ formData, status, handleChange, handleSubmit }` del hook.
- `mobile-menu.tsx` y `language-switcher.tsx` no se modifican — su lógica es trivial (toggle boolean y router push de 1 línea) y no justifica extracción.

## Capabilities

### New Capabilities
- `use-contact-form`: Custom hook `useContactForm` que encapsula estado, validación, envío y timeouts del formulario de contacto.

### Modified Capabilities
<!-- None -->

## Impact

- `hooks/use-contact-form.ts` — nuevo archivo.
- `components/contact-form.tsx` — refactor para usar el hook; markup sin cambios visuales.
- `app/[lang]/contact/page.tsx` — sin cambios (ya pasa `labels` como props).
