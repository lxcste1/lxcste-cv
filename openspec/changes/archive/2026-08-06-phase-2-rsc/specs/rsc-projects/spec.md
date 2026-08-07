## ADDED Requirements

### Requirement: Projects page renders as static generation
The `/projects` page SHALL be a Server Component using SSG, rendering project data directly from `lib/translations.ts`.

#### Scenario: Projects page is statically generated
- **WHEN** developer runs `pnpm build`
- **THEN** the route for each language shows `○ (Static)` in the build output

#### Scenario: Projects page does not use client hooks
- **WHEN** developer inspects `app/projects/page.tsx`
- **THEN** the file does NOT contain `"use client"` directive

### Requirement: ProjectCard is a Server Component
The `ProjectCard` component SHALL be a Server Component that renders project data without client-side hooks.

#### Scenario: ProjectCard has no client directive
- **WHEN** developer inspects `components/project-card.tsx`
- **THEN** the file does NOT contain `"use client"` directive
- **AND** does NOT contain `useLanguage()`, `useState()`, or `useEffect()` calls

#### Scenario: ProjectCard renders with languages
- **WHEN** ProjectCard receives `title`, `description`, `technologies`, `status`, `imageUrl`, `url` as props
- **AND** translated labels (`viewProject`, `inDevelopment`, `comingSoon`) as props
- **THEN** it renders the project card correctly in the specified language
