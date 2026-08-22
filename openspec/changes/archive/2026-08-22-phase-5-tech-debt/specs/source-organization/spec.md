# source-organization Specification (Delta)

## MODIFIED Requirements

### Requirement: Canonical custom hooks
Los hooks reutilizables SHALL residir en `hooks/` y sus filenames SHALL usar `camelCase`. Cada hook SHALL tener una única implementación canónica dentro del proyecto.

#### Scenario: Resolving mobile hook
- **WHEN** un componente necesita detectar viewport mobile
- **THEN** importa el hook desde `@/hooks/useMobile`

#### Scenario: Removing duplicate UI hooks
- **WHEN** se inspecciona `components/ui/` después de la migración
- **THEN** no existen `use-mobile.tsx` ni `use-toast.ts` como implementaciones duplicadas

#### Scenario: Legacy toast hook removed
- **WHEN** se inspecciona `hooks/` después de la fase 5
- **THEN** no existe `useToast.ts`; la capacidad de toasts es provista por sonner
