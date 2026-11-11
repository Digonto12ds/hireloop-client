<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# hireloop-client

Next.js 16 (App Router) client for HireLoop. shadcn/ui + Tailwind v4, better-auth with MongoDB. Single package — no monorepo, no test suite, no CI.

## Commands

- `npm run dev` — dev server (Turbopack is the default bundler; use `--webpack` to opt out).
- Verification order: `npm run lint && npm run typecheck` (both verified passing).
- `npm run format` — Prettier over all `**/*.{ts,tsx}`. Style is enforced by config: **no semicolons, double quotes**, Tailwind class sorting via `prettier-plugin-tailwindcss`. Run it before finishing; don't hand-fight its output.
- There is **no `test` script or test framework** — don't invent `npm test` or add one without being asked.

## Architecture

- `app/` — App Router: `app/page.tsx`, `app/layout.tsx`, `app/api/auth/[...all]/route.ts` (mounts better-auth handlers).
- `lib/auth.ts` — server better-auth config (MongoDB adapter, email/password + Google social login). `lib/auth-client.ts` — browser client from `better-auth/react`.
- `components/ui/` — shadcn components; add more with `npx shadcn@latest add <name>` (style `base-nova`, aliases in `components.json`).
- Path alias `@/*` → repo root (from `tsconfig.json`).
- Tailwind v4 is CSS-first: no `tailwind.config`; theme/token changes go in `app/globals.css`.

## Runtime prerequisites

- Auth requires a local MongoDB at `mongodb://localhost:27017/database` — hardcoded in `lib/auth.ts`.
- `.env` (gitignored) defines `BETTER_AUTH_SECRET` and `BETTER_AUTH_URL`. `lib/auth.ts` also reads `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET`, which are **not** set — Google login fails until they are provided.

## Notes

- `CLAUDE.md` contains only `@AGENTS.md` — edit this file only; don't duplicate guidance there.
