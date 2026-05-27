<!-- BEGIN:nextjs-agent-rules -->
# Next.js version warning

This project uses Next.js 16.2.6 — APIs, conventions, and file structure differ from older
versions (14/15). Before writing code, read the relevant guide in `node_modules/next/dist/docs/`.
Heed deprecation notices and AI agent hints embedded in those docs.
<!-- END:nextjs-agent-rules -->

## Working with this repo

- **Before any task**: read `AGENTS.md` as the starting reference.
- **After any modification**: update `AGENTS.md` if the change introduces new conventions,
  dependencies, patterns, gotchas, or structural facts an agent would otherwise miss.

## Toolchain

- **Dev server**: `npm run dev` (Next.js + Turbopack)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (ESLint 9 flat config in `eslint.config.mjs`)
- No typecheck script defined; TypeScript is validated at build time via the Next.js plugin in
  `tsconfig.json`.
- No test runner configured yet.

## Proxy (Next.js 16 replaces Middleware)

- Next.js 16.2.6 uses `proxy.ts` (root-level), not the deprecated `middleware.ts`.
- Exports a function named `proxy` (not `middleware`). Same API: `NextRequest`, `NextResponse`,
  `config.matcher`.
- Reference: `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`
- ESLint allows `_`-prefixed unused function args (`argsIgnorePattern: "^_"`), useful for proxy
  stubs.

## Architecture

- Next.js 16 App Router project (directory: `app/`).
- Tailwind CSS **v4** — uses `@import "tailwindcss"` and `@theme inline { … }` in `globals.css`,
  **not** the legacy `@tailwind` directives or a `tailwind.config.ts`.
- Design-system color tokens (dark theme: surface, primary, etc.) are defined in `@theme` block in
  `globals.css`. These map to Tailwind utility classes like `bg-primary`, `text-on-surface`, etc.
  The primary brand color is green (`#4ae176`).
- `@/*` import alias resolves to the project root (`./*`).
- TypeScript `strict: true`.
- `next.config.ts` allows external images from `lh3.googleusercontent.com` via
  `images.remotePatterns`.

## Project type

SaaS dashboard for solar companies to manage projects, customers, and analytics.

## Conventions

- `cn()` helper in `libs/utils.ts` for joining class names. Simple implementation (no `clsx` or
  `tailwind-merge` dependency yet).
- `.env.example` documents required environment variables (safe to commit). `.env*.local` files are
  in `.gitignore`.
- Dashboard routes live under `app/dashboard/`. Each sub-route (`/dashboard/projects`,
  `/dashboard/customers`, etc.) gets its own `page.tsx`. The layout is responsive:
  **desktop** shows a fixed sidebar (240px), **mobile** uses a hamburger-triggered slide-out drawer.
  Dashboard components live under `components/dashboard/`.
- `constants/index.ts` holds app-wide constants (`APP_NAME`, `DASHBOARD_NAV`). Nav items include an
  optional `icon` key mapped via `NAV_ICON_MAP` in `components/dashboard/nav-icons.tsx`.
- `types/index.ts` holds shared TypeScript interfaces (`User`, `NavItem`, `DashboardStats`).
- Landing page at `/` is a dark-themed signup page with a viewport-locked `h-dvh` shell (no page
  scrolling), compact mobile spacing, and in-flow navbar/footer bars plus a hero center section.
  Components are under `components/landing/`. Icons are inline SVGs in `icons.tsx` (no icon library
  dependency yet).
- Login page at `/login` is a full-screen centered card with cinematic background, particles, and
  login form. Uses the `(auth)` route group.

## Directories

| Path                   | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `app/`                 | App Router routes and layouts                |
| `app/dashboard/`       | Dashboard routes wrapped by sidebar layout   |
| `app/dashboard/*/`     | Module sub-pages (projects, customers, etc.) |
| `app/(auth)/`          | Auth routes (/login, planned /signup)        |
| `components/`          | Shared React components (sidebar, etc.)      |
| `components/dashboard/`| Dashboard components (sidebar-nav, top-bar, mobile-drawer, stats-card, nav-icons) |
| `components/landing/`  | Landing page components (navbar, footer, form, icons) |
| `hooks/`               | Custom React hooks                           |
| `libs/`                | Shared utilities (`cn`, etc.)                |
| `types/`               | Shared TypeScript types                      |
| `constants/`           | App-wide constants                           |
| `db/`                  | Database layer (not implemented yet)         |
| `public/`              | Static assets                                |
