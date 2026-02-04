# AI Rules for Paczka Grafa

## Tech Stack

- **Static HTML**: Plain HTML5 files with no build system or framework
- **Tailwind CSS**: Used via CDN (`https://cdn.tailwindcss.com`) for all styling
- **Vanilla JavaScript**: No frameworks like React or Vue - use native JS for interactivity
- **CDN-based libraries**: External libraries loaded via CDN links in HTML
- **File-based routing**: Each page is a separate HTML file in its own directory (e.g., `/paczka/index.html`)
- **No package manager**: No npm, yarn, or pnpm - dependencies are loaded via CDN
- **No TypeScript**: Pure JavaScript only
- **No bundler**: No webpack, vite, or rollup - files are served as-is
- **Static file serving**: ZIP files and assets served directly from `/pliki/` directory

## Library Usage Rules

### Styling
- **ALWAYS use Tailwind CSS** for all styling needs
- Use custom CSS in `<style>` tags only for animations not available in Tailwind
- Follow the existing dark theme color scheme: `bg-gray-900` (background), `bg-gray-800` (cards), `bg-gray-700` (inputs), `text-gray-200` (text)
- Primary action color: `bg-blue-600` / `hover:bg-blue-700`
- Success/CTA color: `bg-green-600` / `hover:bg-green-700`

### JavaScript
- **NEVER add React, Vue, or other frontend frameworks**
- Use vanilla JavaScript with `document.getElementById` and `addEventListener`
- Keep scripts at the bottom of `<body>` or use `defer` attribute
- Maintain existing animation patterns (`animate-fadeIn`, `animate-slideIn`)

### Icons & Assets
- Use the existing `logo.png` for branding
- Minecraft-related imagery should reference official Minecraft assets or existing files only

### External Libraries (CDN Only)
- **Confetti effects**: Use `canvas-confetti` via CDN (`https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js`)
- **Icons**: Use inline SVG or text-based icons (no icon libraries like FontAwesome)
- **Fonts**: Use system fonts or default Tailwind font stack

## File Structure Rules

- Keep pages in their own directories: `/pagename/index.html`
- Store downloadable files in `/pliki/categoryname/`
- Maintain the existing navigation structure across all pages
- Always include the navigation bar with links to `/paczka` and `/rozne`

## Content Guidelines

- Primary language: **Polish**
- Keep Minecraft-specific terminology accurate
- Maintain the friendly, helpful tone for installation instructions
- Always provide clear download paths and installation guidance

## Responsive Design

- **MUST be mobile-responsive** - use Tailwind's responsive prefixes (`md:`, `lg:`)
- Test layouts for mobile (`w-full`) and desktop (`md:w-4/5`, etc.)
- Navigation must work on small screens (flex-wrap, mobile-friendly buttons)