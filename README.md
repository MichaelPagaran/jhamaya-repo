# Portfolio — jhamaya-repo

A modern portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## Getting Started

```bash
# 1. Clone the repo
git clone <repo-url>
cd jhamaya-repo

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router — pages & layouts
├── components/
│   ├── ui/                 # Reusable primitives (Button, Card, …)
│   ├── layout/             # Structural components (Navbar, Footer)
│   └── sections/           # Page sections (HeroSection, AboutSection, …)
├── lib/                    # Utility functions & data helpers
├── hooks/                  # Custom React hooks
├── types/                  # Shared TypeScript interfaces
└── constants/              # App-wide constants (nav links, site metadata)
content/
└── projects/               # MDX project entries
```

---

## Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Directories | `kebab-case` | `hero-section/` |
| React Components | `PascalCase` | `ProjectCard.tsx` |
| Hooks | `camelCase` + `use` prefix | `useScrollPosition.ts` |
| Utilities | `camelCase` | `formatDate.ts` |
| Types / Interfaces | `PascalCase` | `Project`, `NavLink` |
| Constants | `SCREAMING_SNAKE_CASE` | `NAV_LINKS`, `SITE_META` |
| CSS Classes | `kebab-case` | `.hero-section` |

---

## Git Workflow

### Branch Strategy
- `main` — production-ready, **protected** (no direct pushes)
- `dev` — integration branch
- Feature branches cut from `dev`: `type/short-description`

### Branch Name Examples
```
feat/hero-section
fix/navbar-overflow
chore/update-dependencies
docs/readme-update
```

### Commit Messages (Conventional Commits)

```
feat: add hero section
fix: navbar overflow on mobile
chore: update dependencies
docs: update README conventions
refactor: extract Button component
```

> **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## Useful Commands

```bash
npm run dev        # Start dev server
npm run lint       # Run ESLint
npx tsc --noEmit   # Check TypeScript without building
npm run build      # Build for production
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values. **Never commit `.env.local`.**

---

## Adding a New Project

1. Add an MDX file to `content/projects/your-project-slug.mdx` following the template in `example-project.mdx`.
2. Update `src/lib/projects.ts` if you extend the data source.
