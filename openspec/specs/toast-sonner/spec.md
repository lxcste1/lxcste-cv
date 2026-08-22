## ADDED Requirements

### Requirement: Toasts provided by sonner
Toast notifications SHALL be provided by the sonner-based shadcn wrapper (`components/ui/sonner.tsx`). Consumers SHALL trigger toasts via `toast()` exported by `sonner`.

#### Scenario: Sonner toaster available
- **WHEN** an app section needs toast feedback
- **THEN** it renders `components/ui/sonner.tsx`'s Toaster and calls `toast()` from `sonner`

#### Scenario: No legacy toast implementation remains
- **WHEN** developer searches the repository for `hooks/useToast`, `components/ui/toast`, or `components/ui/toaster`
- **THEN** no matching source files exist
