## ADDED Requirements

### Requirement: Application component organization
Los componentes propios de la aplicación SHALL ubicarse en `components/<component-name>/<ComponentName>.tsx`, donde `<component-name>` usa `kebab-case` y `<ComponentName>` usa PascalCase. Ningún componente propio nuevo o migrado SHALL permanecer como un archivo plano directamente bajo `components/`.

#### Scenario: Importing a migrated application component
- **WHEN** una ruta o componente consume un componente propio migrado
- **THEN** lo importa desde su carpeta `components/<kebab-case>/<PascalCase>.tsx` sin referenciar su path plano anterior

### Requirement: Shadcn primitive isolation
El directorio `components/ui/` SHALL contener exclusivamente primitives generados por shadcn. Sus archivos existentes SHALL conservar la estructura y naming compatibles con el generador, y los componentes propios SHALL ubicarse fuera de ese directorio.

#### Scenario: Preserving shadcn primitive imports
- **WHEN** un componente propio importa un primitive de shadcn existente
- **THEN** el import continúa resolviendo desde `@/components/ui/<primitive>`

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

### Requirement: Documented source organization
`CODING_CONVENTIONS.md` SHALL distinguir la estructura de los componentes propios de la estructura reservada para primitives generados por shadcn.

#### Scenario: Locating a new component
- **WHEN** una persona consulta la sección de estructura de componentes
- **THEN** puede determinar que un componente propio vive bajo `components/<kebab-case>/<PascalCase>.tsx` y que `components/ui/` se reserva para shadcn
