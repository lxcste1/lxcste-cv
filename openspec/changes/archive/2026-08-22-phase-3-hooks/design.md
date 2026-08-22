## Context

`CODING_CONVENTIONS.md` Section "Separation of Concerns":
- "Zero state in the view: It is strictly forbidden to declare `useState`, `useEffect`, `useReducer`, or event handlers directly within the body of a UI component."
- "Clean UI: The UI component must only consume the data and methods returned by its hook, containing ONLY presentation and rendering code."

`contact-form.tsx` viola esto: `useState(formData)`, `useState(status)`, `handleChange()`, `handleSubmit()` con `fetch()` y `setTimeout()` están todos dentro del componente.

## Goals / Non-Goals

**Goals:**
- `contact-form.tsx` es puramente presentacional — 0 `useState`, 0 funciones de evento, 0 `fetch`.
- `useContactForm(labels)` encapsula toda la lógica: estado del form, cambio de inputs, submit, status lifecycle, timeouts.
- Comportamiento visual y funcional idéntico al actual.

**Non-Goals:**
- Extraer hooks de `language-switcher.tsx` (3 líneas de lógica — no justifica).
- Extraer hooks de `mobile-menu.tsx` (`useState` toggle — no justifica).
- Agregar validación de formulario adicional.

## Decisions

### Hook signature: `useContactForm(labels) → { formData, status, handleChange, handleSubmit }`

El hook recibe `labels` (las mismas que ya recibe `ContactForm`) porque `handleSubmit` usa `labels.success` y `labels.error` para el mensaje de status. Retorna solo lo que el componente necesita renderizar.

**Alternativa considerada**: Hook sin parámetros, mensajes de status como strings hardcodeados. Descartada — rompe i18n.

### El componente no recibe `labels` directamente — el hook sí
Actualmente `ContactForm` recibe `labels` como prop. Con el refactor, `useContactForm(labels)` consume `labels` internamente para los mensajes de success/error. El componente solo renderiza los labels que van al markup (`name`, `email`, `placeholder`, `send`, `sending`), que también se los pasa el hook o se mantienen como prop.

**Decisión**: `labels` se mantiene como prop del componente para los textos de UI (name, email, placeholder, etc.), y el hook recibe `labels` solo para success/error messages. Esto mantiene la responsabilidad clara: hook maneja estado + fetch, componente maneja presentación.

### Timeouts: se mantienen dentro del hook
Los `setTimeout` de 5 segundos para resetear el status son lógica de negocio, no de presentación. Pertenecen al hook.

## Risks / Trade-offs

- **[Riesgo] Refactor introduce regresión en el envío del form** → Mitigación: test manual de envío después del refactor. El hook usa exactamente el mismo `fetch("/api/contact", ...)` que antes.
