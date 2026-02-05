# AI Rules for Paczka Grafa (React Modernization)

## Tech Stack

- **React 18+** - Functional components with Hooks (useState, useCallback, useMemo)
- **Vite** - Fast build tool and dev server
- **TypeScript** - Strict type safety, no `any` types, explicit interfaces
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **Framer Motion** - Declarative animations with accessibility support (prefers-reduced-motion)
- **React Router v6** - Declarative routing with hooks (useLocation, Navigate)
- **shadcn/ui** - Headless UI components (Button, Input, DropdownMenu)
- **Lucide React** - Consistent, lightweight icon system

## Architecture Rules

### Component Structure
- **Small Components**: Max 100 lines per component, single responsibility
- **Co-location**: Keep related components close (e.g., `download/` folder)
- **Props Interface**: Always define explicit TypeScript interfaces for props
- **Export Pattern**: Use named exports for components, default only for pages

### State Management
- **ZERO Persistence**: No LocalStorage, SessionStorage, Cookies, or IndexedDB
- **Ephemeral State**: All state resets on page refresh (by design for privacy)
- **URL State**: Use query params for shareable state only (not implemented to avoid tracking)
- **Lifting State**: Keep state as close to usage as possible, lift only when necessary

### Hooks Usage
- **useCallback**: Wrap all event handlers and functions passed to children
- **useMemo**: Memoize expensive computations (filtering, mapping)
- **Custom Hooks**: Extract reusable logic (e.g., `useDownload` if complexity grows)
- **No useEffect for data**: All data is static imports from `lib/data.ts`

### Privacy & Security
- **No PII Collection**: No forms collect names, emails, or identifiers
- **mailto: Links**: Use `mailto:` for contact with pre-filled subject (no backend)
- **No Analytics**: No Google Analytics, no tracking pixels, no cookies
- **Sanitization**: Use `stripColorCodes` and `encodeURIComponent` for filenames
- **External Links**: Always use `rel="noopener noreferrer"` for target="_blank"

### UI/UX Standards

#### Accessibility (WCAG 2.1)
- **Keyboard Navigation**: All interactive elements focusable and operable via keyboard
- **ARIA Labels**: Proper `aria-label`, `aria-expanded`, `aria-checked` usage
- **Focus Management**: Visible focus rings, skip-to-content link
- **Screen Readers**: Semantic HTML, `aria-hidden` for decorative icons
- **Reduced Motion**: Respect `prefers-reduced-motion` media query

#### Animations (Framer Motion)
- **Purposeful**: Animations guide attention, never obstruct functionality
- **Subtle**: Durations 0.3s-0.6s, ease-out curves
- **Staggered**: Use staggerChildren for lists (0.05s-0.1s delay)
- **Layout Animations**: Use `layoutId` for shared element transitions
- **Exit Animations**: Always provide exit variants for AnimatePresence

#### Styling (Tailwind)
- **Design Tokens**: Use CSS variables for colors (primary, secondary, etc.)
- **Responsive**: Mobile-first with `sm:`, `md:`, `lg:` prefixes
- **Dark Mode**: Single dark theme (gray-950 base), no light mode toggle
- **Spacing**: Consistent 4px grid (4, 8, 12, 16, 24, 32, 48, 64)
- **Typography**: Default system font stack, semibold for headings

### File Organization
```
src/
  components/
    ui/           # shadcn components (Button, Input, Card)
    layout/       # Navbar, Layout, Footer
    download/     # DownloadSection, CategorySelect, FileSelect
    motion/       # AnimatedPage, ConfettiButton
  pages/          # Route components (Index, Paczka, Rozne, Helikopter)
  lib/            # Utilities and static data
  types/          # TypeScript interfaces
  hooks/          # Custom React hooks (if needed)
```

### Performance
- **Code Splitting**: React.lazy() for routes if bundle grows >200kb
- **Image Optimization**: Use WebP format, lazy loading for below-fold images
- **Font Loading**: Use system fonts (no Google Fonts to avoid tracking)
- **Tree Shaking**: Import only used icons from lucide-react

### What NOT to Use
- No class components (only functional)
- No Redux, Zustand, or global state libraries
- No CSS-in-JS (styled-components, emotion)
- No external font services (Google Fonts, Adobe Fonts)
- No analytics or tracking libraries
- No social media embeds (trackers)
- No cookie consent banners (we don't use cookies)