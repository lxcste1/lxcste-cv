# mobile-nav Specification (Delta)

## ADDED Requirements

### Requirement: Mobile menu links use language-prefixed routes
The mobile menu (`components/mobile-menu/MobileMenu.tsx`) SHALL link to language-prefixed routes (`/{lang}`, `/{lang}/projects`, `/{lang}/contact`), receiving the current language as a prop, matching desktop nav behavior.

#### Scenario: Links resolve on [lang] routes
- **WHEN** user opens the mobile menu on `/es` or `/en` and clicks each nav item
- **THEN** navigation lands on the equivalent page in the same language
- **AND** no link results in a 404

### Requirement: Mobile menu renders as a right-side drawer
When open, the mobile menu SHALL render inside a right-side drawer (vaul via `components/ui/drawer.tsx`) overlaying page content, with focus trap and dismissal on link navigation, overlay tap, Escape, or swipe.

#### Scenario: Drawer behavior at mobile viewport
- **WHEN** user taps the hamburger at a viewport narrower than 768px
- **THEN** a drawer slides in from the right, full height, over a dimmed overlay
- **AND** the header logo and toggle button keep their positions

#### Scenario: Drawer dismisses after navigation
- **WHEN** user selects any nav item inside the drawer
- **THEN** the app navigates to the target route and the drawer closes
