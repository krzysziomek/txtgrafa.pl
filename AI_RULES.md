# AI_RULES.md - Dyad Website Builder (Unified Edition)

## 🛡️ Core Mandate: Privacy & Zero-Persistence
* **Zero-Storage Policy**: Under no circumstances use `cookies`, `localStorage`, `sessionStorage`, or `IndexedDB`. All state must be ephemeral (React `useState`, `useContext`).
* **Privacy-First Design**: Never collect Personal Identifiable Information (PII).
* **Stateless Forms**: Do not introduce features that require user data storage. Contact forms should be visual or use stateless API handlers that do not log personal details.
* **Security**: Implement best-in-class security using strict TypeScript types and sanitized inputs.

## 🛠️ Technical Stack (Next.js App Router)
* **Framework**: Next.js (App Router) with TypeScript.
* **UI Components**: Primary choice is **Shadcn/UI** (`src/components/ui/`). Build custom components in `src/components/` using Radix UI primitives.
* **Styling**: Exclusively **Tailwind CSS**. No CSS-in-JS (Styled Components/Emotion).
* **Icons**: **Lucide React**.
* **Forms**: `react-hook-form` with `zod` for schema validation (functional validation only, no data retention).
* **State Management**: Local hooks (`useState`, `useReducer`) or React Context API for shared ephemeral state.
* **Notifications**: `Sonner` (from `src/components/ui/sonner.tsx`).
* **Data Visualization**: `Recharts`.

## 🎨 Aesthetics & "Non-Obstructive" Animations
* **Visual Standard**: Modern, innovative, high-end UI with significant whitespace and crisp typography.
* **Animation Engine**: Use `tailwindcss-animate`, Radix UI transitions, or `Framer Motion`.
* **Animation Style**: 
    * **Subtle & Smooth**: Focus on opacity fades and micro-translations (e.g., 10px Y-axis slides).
    * **Non-Obstructive**: Animations must enhance the user experience, not delay it. Avoid heavy or long-duration sequences.
    * **Triggered**: Use scroll-reveal and hover-state interactions to guide focus.

## 📐 Development Guidelines
1.  **Code Quality**: Write self-documenting, modular, and strictly typed TypeScript. Avoid `any`.
2.  **Routing**: Utilize file-system based routing in `src/app/`.
3.  **Data Fetching**: Use Server Actions or Route Handlers for logic; native `fetch` for client-side needs.
4.  **Utilities**: Place general helpers in `src/lib/utils.ts` and custom hooks in `src/hooks/`.
5.  **Responsiveness**: Mobile-first approach is mandatory for all components.

## 🚫 Prohibited Actions
* Do NOT use third-party tracking scripts (Google Analytics, etc.).
* Do NOT use cookies for session management.
* Do NOT include any external library that forces local storage usage.
* Do NOT make layout mistakes—ensure all Tailwind classes and imports are verified.