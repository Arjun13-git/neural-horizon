# Neural Horizon — Production-Ready Portfolio Implementation Plan

## Background

Neural Horizon is Arjun Shenoy R's engineering portfolio. The project has a solid foundation: Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui, and a well-thought-out folder structure. However, only the Hero section and basic layout are implemented. Every other section (About, Skills, Experience, Projects, Research, Achievements, Certifications, Blog, Contact, Footer, 404, etc.) is missing.

This plan completes the entire portfolio from foundation to production-ready state, building iteratively on the existing architecture.

---

## Current State Audit

### ✅ Already Built (Good Quality)
- App layout (`app/layout.tsx`) — fonts loaded, ThemeProvider set up
- Navbar — functional but needs mobile menu, scroll behavior, active state
- Hero — content, background, AI Core, OrbitSystem, SystemStatus exist but need refinement
- Background system — gradient, grid, neural network, ocean components
- Visualizations — particle field, hero network, orbit system, ai core
- Theme system — dark/light with next-themes
- Animation library — fadeUp/fadeLeft/fadeRight variants
- Site config, navigation config

### ⚠️ Needs Improvement
- `hero-background.tsx` has unreachable code (returns `<Background />` then dead returns)
- `globals.css` has generic shadcn default colors — needs Neural Horizon palette
- Missing `"use client"` on some components that use framer-motion
- Hero stats are hardcoded — should come from constants
- Typography not applied correctly (font variables not wired to tailwind theme)
- Navbar missing: mobile menu, scroll-aware styling, active link highlighting

### ❌ Missing Entirely
- About section
- Skills section  
- Experience Timeline section
- Projects section
- Research section
- Achievements section
- Certifications section
- Blog section  
- Contact section
- Footer (complete)
- 404 page
- Loading states
- All content (MDX/markdown files)
- Types definitions
- Custom hooks
- Utility functions
- SEO metadata
- Open Graph images
- Sitemap
- Robots.txt
- Services layer

---

## Implementation Strategy

Work section by section. Each iteration:
1. Implement types → content → lib → component → page

---

## Phase 1: Foundation & Design System

### Fix globals.css
Replace generic shadcn palette with Neural Horizon design tokens from `docs/04-DESIGN_SYSTEM.md`.
- Dark: `#090B10` background, `#22D3EE` secondary, `#3B82F6` primary
- Light: `#F8FAFC` background, proper semantic tokens

### Fix typography wiring
Wire `--font-heading`, `--font-sans`, `--font-mono` to Tailwind theme properly.

### Create types
- `types/index.ts` — all shared interfaces (Project, Experience, Research, etc.)
- `types/content.ts` — MDX/markdown content types

### Create utility functions
- `utils/cn.ts` — className utility (already in `lib/utils.ts`, re-export)
- `utils/date.ts` — date formatting
- `utils/content.ts` — content loading helpers

### Create custom hooks
- `hooks/use-scroll.ts` — scroll position
- `hooks/use-reduced-motion.ts` — prefers-reduced-motion
- `hooks/use-intersection.ts` — intersection observer

---

## Phase 2: Layout & Navigation

### Navbar — Complete rewrite (preserve structure)
- Add scroll-aware background change
- Add mobile hamburger menu with Sheet
- Add active link detection
- Add smooth animation on mount

### Footer — Complete implementation
- Social links (GitHub, LinkedIn, Email)
- Quick nav links
- Copyright
- Tagline

---

## Phase 3: Content Files

Create all markdown content files:

### Projects (10 files)
- `content/projects/quantum-ml-galaxy.md`
- `content/projects/jarvis-ai-assistant.md`
- `content/projects/sentinel-agents.md`
- `content/projects/safe-horizon.md`
- `content/projects/cad-copilot.md`
- `content/projects/promptguard.md`
- `content/projects/cryptographic-swarm.md`
- `content/projects/drawing2cad.md`
- `content/projects/opengl-graphics.md`
- `content/projects/foodie.md`

### Experience (2 files)
- `content/experience/startup-internship.md`
- `content/experience/elite-training.md`

### Research (2 files)
- `content/research/quantum-ml-survey.md`
- `content/research/galaxy-classification.md`

### Certifications
- `content/certifications/techa-ethical-hacking.md`

### Blog (placeholder)
- `content/blog/building-intelligent-systems.md`

### Profile
- `content/profile/about.md`

---

## Phase 4: Hero Section Improvements

Fix existing bugs and enhance:
- Fix `hero-background.tsx` dead code
- Add portrait placeholder (AI-generated)
- Improve AICore with proper tech orbit labels
- Add `useReducedMotion` support
- Make hero responsive on mobile
- Wire stats to constants

---

## Phase 5: Section Components

Build every section as a standalone component:

### About Section
- Two-column: text + quick facts card
- Personal philosophy quote
- Tech stack icons

### Skills Section
- Grouped by domain (AI/ML, Backend, Frontend, etc.)
- Progress/proficiency indicators
- Clean card grid

### Experience Timeline
- Vertical timeline component
- Experience cards with dates, role, company, description

### Projects Section
- Filterable project grid (All / AI / Backend / Research)
- Project cards with tech tags, links, descriptions

### Research Section
- Research cards with paper abstracts
- Status badges (Active / Published / Completed)

### Achievements Section
- Achievement cards (Hackathons, Certifications, etc.)

### Certifications Section  
- Certification cards with issuer, date, credential

### Blog Section
- Blog post cards with reading time, date, excerpt

### Contact Section
- Contact form (React Hook Form + Zod)
- Social links
- Location badge

---

## Phase 6: SEO & Metadata

### `app/layout.tsx` — Full metadata object
- Title template
- Description
- Open Graph
- Twitter Card
- Keywords
- Author

### `app/sitemap.ts` — Auto-generated sitemap

### `app/robots.ts` — Robots config

### `public/og-image.png` — Open Graph image (generated)

---

## Phase 7: Additional Pages

### `app/not-found.tsx` — 404 page
Custom 404 with navigation back to home.

### Loading states
- `app/loading.tsx` — global loading UI

---

## Phase 8: Final Polish

- ESLint pass
- TypeScript strict check  
- Responsive audit (mobile, tablet, desktop)
- Accessibility audit (ARIA labels, keyboard nav)
- Animation performance (GPU offloading, reduced motion)
- Code cleanup

---

## Proposed Changes

### Foundation
#### [MODIFY] [globals.css](file:///c:/Projects/portfolio/app/globals.css) — Neural Horizon design tokens
#### [MODIFY] [layout.tsx](file:///c:/Projects/portfolio/app/layout.tsx) — Full SEO metadata
#### [MODIFY] [page.tsx](file:///c:/Projects/portfolio/app/page.tsx) — All sections assembled
#### [NEW] [sitemap.ts](file:///c:/Projects/portfolio/app/sitemap.ts)
#### [NEW] [robots.ts](file:///c:/Projects/portfolio/app/robots.ts)
#### [NEW] [not-found.tsx](file:///c:/Projects/portfolio/app/not-found.tsx)
#### [NEW] [loading.tsx](file:///c:/Projects/portfolio/app/loading.tsx)

### Types
#### [NEW] types/index.ts
#### [NEW] types/content.ts

### Utils
#### [NEW] utils/cn.ts
#### [NEW] utils/date.ts
#### [NEW] utils/content.ts

### Hooks
#### [NEW] hooks/use-scroll.ts
#### [NEW] hooks/use-reduced-motion.ts
#### [NEW] hooks/use-intersection.ts

### Config
#### [MODIFY] config/site.ts — complete site config with socials
#### [NEW] config/metadata.ts — full metadata config

### Constants
#### [NEW] constants/skills.ts
#### [NEW] constants/stats.ts

### Layout Components
#### [MODIFY] components/layout/navbar.tsx — mobile menu, scroll behavior
#### [MODIFY] components/layout/footer.tsx — full footer

### Hero Fix
#### [MODIFY] components/sections/hero/hero-background.tsx — fix dead code
#### [MODIFY] components/sections/hero/hero-stats.tsx — move to constants

### New Section Components (each in own directory)
#### [NEW] components/sections/about/
#### [NEW] components/sections/skills/
#### [NEW] components/sections/experience/
#### [NEW] components/sections/projects/
#### [NEW] components/sections/research/
#### [NEW] components/sections/achievements/
#### [NEW] components/sections/certifications/
#### [NEW] components/sections/blog/
#### [NEW] components/sections/contact/

### Content Files
#### [NEW] content/projects/* (10 files)
#### [NEW] content/experience/* (2 files)
#### [NEW] content/research/* (2 files)
#### [NEW] content/certifications/* (1 file)
#### [NEW] content/blog/* (1 file)
#### [NEW] content/profile/about.md

### Services
#### [NEW] services/content.ts — markdown loading
#### [NEW] services/email.ts — contact form

### Lib
#### [NEW] lib/content.ts — content parsing with gray-matter

---

## Verification Plan

### Automated
- `npm run build` — TypeScript compilation + Next.js build
- `npm run lint` — ESLint pass

### Manual
- Visual check of each section on desktop, tablet, mobile
- Dark/light theme toggle
- All navigation links scroll correctly
- Contact form validation works
- 404 page renders

---

> [!IMPORTANT]
> The implementation preserves all existing components. No working code is deleted — only improved or extended.
