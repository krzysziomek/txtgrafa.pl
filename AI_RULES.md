# AI Rules for Paczka Grafa

## Tech Stack

- **Static HTML5** - Simple multi-page static website without a JavaScript framework
- **Tailwind CSS (CDN)** - Utility-first CSS framework loaded via CDN (`https://cdn.tailwindcss.com`)
- **Vanilla JavaScript** - No React, Vue, or other frontend frameworks; plain JS for interactions
- **Canvas Confetti** - Lightweight library for celebration effects on downloads
- **No Build Tools** - Direct HTML/CSS/JS files without bundlers, compilers, or package managers
- **File-based Routing** - Pages organized in folders (e.g., `/paczka/index.html`, `/rozne/index.html`)
- **Static Assets** - ZIP files served directly from `/pliki/` directory structure

## Library Usage Rules

### When to use Tailwind CSS
- **ALWAYS** use Tailwind utility classes for styling (layout, spacing, colors, typography)
- Use arbitrary values sparingly (e.g., `w-[100px]`) only when standard utilities don't suffice
- Keep custom CSS in `<style>` tags only for animations and keyframes not available in Tailwind
- Use Tailwind's built-in responsive prefixes (`md:`, `lg:`) for responsive design

### When to use Vanilla JavaScript
- Use plain JavaScript for DOM manipulation (`document.getElementById`, `addEventListener`)
- Keep scripts at the bottom of `<body>` or use `defer` attribute
- Avoid external JS frameworks (jQuery, React, Vue, etc.)
- Use modern ES6+ features (const/let, arrow functions, template literals)

### Animation Guidelines
- Use CSS keyframes defined in `<style>` tags for custom animations (fadeIn, slideIn)
- Keep animation durations between 0.3s - 0.8s for good UX
- Use `canvas-confetti` only for celebration moments (downloads, successes)

### Static Assets
- Place downloadable files in `/pliki/{category}/` directory structure
- Use descriptive filenames with Minecraft color code prefixes (e.g., `§bOverlay Grafa §a1.21.zip`)
- Maintain existing category structure: `overlay`, `ramki`, `pozostale`

### Navigation & Structure
- Include the same navigation bar on every page with links to main sections
- Use relative paths for internal links (`/paczka`, `/rozne`)
- Keep the same gray/dark color scheme (bg-gray-900, bg-gray-800) across all pages
- Maintain Polish language for all user-facing content

### What NOT to use
- No npm/yarn packages or node_modules
- No frontend frameworks (React, Vue, Svelte, Angular)
- No CSS preprocessors (Sass, Less)
- No JavaScript build tools (Webpack, Vite, Rollup)
- No backend frameworks or server-side rendering