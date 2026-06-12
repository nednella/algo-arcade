# algo-arcade

An arcade of interactive algorithm visualisations. A personal learning project — each page is an **exhibit**. React + TypeScript + Vite, TanStack Router (file-based), Tailwind v4, deployed on Vercel (project Root Directory: `app`).

## The one rule that matters

**The algorithms and the exhibit pages are my own work.** That is the entire point of the project. Claude's remit is infrastructure: tooling, routing, structure, docs, the landing page. Do not implement algorithms, do not write exhibit page content, do not "helpfully" fill in `algorithms/`. Build the frame, not the picture.

## Structure

pnpm workspace monorepo: pure algorithm source is split from the app that renders it.

```
algorithms/          # @algo-arcade/algorithms — pure TypeScript, no React imports
└── src/             # one directory per algorithm (src/boids/index.ts → import "@algo-arcade/algorithms/boids")
app/                 # @algo-arcade/app — the Vite/React app and ALL its config (vite, tsconfigs, index.html, vercel.json)
└── src/
    ├── app/         # app.tsx (entry component), providers.tsx (renders all providers), router.ts
    ├── components/  # shared pieces (site-header, theme-switcher, crosshairs, not-found, exhibit-placeholder) + landing/ (per-page pieces)
    ├── content/     # exhibits.ts — typed registry of categories + exhibits driving the landing page
    ├── routes/      # file-based routes; routeToken is "_layout"
    │   ├── __root.tsx   # root layout: centred max-w column, site header, outlet (+ devtools)
    │   ├── index.tsx    # landing page (thin — composes components/landing/*)
    │   └── exhibit/     # _layout.tsx wraps the dir; $slug.tsx renders registry placeholders until a real page exists
    └── main.tsx     # entry point (main.css is the css entry)
```

- Root holds only shared tooling (eslint, prettier, husky, commitlint, CI) and delegating scripts: `pnpm dev|build|preview` filter to the app; `pnpm typecheck` runs recursively; `pnpm lint|format` run from root.
- `algorithms/` tsconfig is strict, `lib: ["ES2023"]` only — no DOM until genuinely needed (e.g. WebGL types for the fluid sim).

- **Route files follow TanStack's standard pattern**: `export const Route = createFileRoute(...)` with the component declared as a function below, passed by name (`component: RouteComponent`). The root route may inline its component. Route files stay **thin** — the component composes imported pieces (page chrome, the algorithm component); page innards don't live in `routes/`.
- `react-refresh/only-export-components` is configured for route files with `extraHOCs: ["createFileRoute", "createRootRoute"]` so the Route export passes on the current plugin version. Caveat from the plugin author (v0.5.0 release notes): route-file HMR degrades once route options gain non-component props (loaders, search validation) — if a route grows those, move its component to its own file.
- **Shared chrome is minimal**: the root layout owns the centred column and the site header (`components/site-header.tsx`). All other page chrome is written per page; the only nested layout file is `exhibit/_layout.tsx`.
- **Named exports only** (`import/no-default-export`), except `*.config.ts` where tools require default exports.
- Imports use the `@/` alias (app-internal) or `@algo-arcade/algorithms/<name>` (cross-package). Files are kebab-case.

## Tooling split

- **Prettier owns all formatting**, including import sort (trivago plugin) and Tailwind class sort (via `prettier-plugin-merge`). Config in `.prettierrc` — no editorconfig.
- **ESLint owns quality**: unicorn (recommended, `prevent-abbreviations` with an allowList), import-x (registered under the `import` namespace), react-hooks, react-refresh. `eslint-config-prettier` last.
- **Hooks**: commitlint (conventional commits) on commit-msg; `lint-staged --quiet` on pre-commit (`--quiet` so failures print only the actual errors).

## App

- **daisyUI 5** is the component library — class-based components (`btn`, `card`, `badge`, …), configured via `@plugin "daisyui"` in `app/src/main.css`. Its official Claude skill lives at `.claude/skills/daisyui/SKILL.md` (vendored from daisyui.com/llms.txt — refresh it when bumping daisyUI).
- Themes: `light`/`dark` (built-ins overridden with blueprint tokens), `terminal` (phosphor green), `arcade` (miami pink/cyan/yellow), plus `system` (resolves to light/dark by OS preference). daisyUI switches on the `data-theme` attribute set by the zustand theme lib in `app/src/lib/theme/` (from `nednella/sanity`). Adding a theme means updating the daisyUI config in `main.css`, the `Theme` union in `app/src/lib/theme/types.d.ts`, and the list in `app/src/components/theme-switcher.tsx`.
- Style with daisyUI semantic colours (`base-100`, `base-content`, `primary`, …), never hardcoded palette classes (`neutral-*`) — those ignore theme switches.
- **Radius comes from the theme (always 0)** — never add `rounded-*` classes.
- Fonts: `font-sans` Geist (body), `font-mono` Geist Mono (kickers, badges, metadata), `font-display` Silkscreen — **wordmark and numerals only, never body text**.
- Recurring details: hairlines are `border-base-300`; dim text is `text-base-content/<40-70>`; metadata is small `font-mono` with wide tracking. Custom utilities in `main.css`: `bg-dotgrid`, `mask-fade-b`, `animate-blink`; `<Crosshairs>` renders `+` corner markers in `currentColor`.

## Commits

- Conventional, enforced by commitlint. Scaffold/tooling = `chore:`, user-facing = `feat:`.
- **Any change to a `.md` file is its own commit**: `docs: add x.md` or `docs: update x.md` — one file per commit.
- **Subject line only — no commit body/description.** The message and the code must be self-descriptive at all times, which is why commits stay as atomic as possible (`chore: restructure into pnpm monorepo…` and a single-doc `docs:` commit are the models).
- **One thing introduced = one commit**, including its integration glue (e.g. `eslint-config-prettier` belongs with the prettier commit).
- Mistake or rework of a commit on an **unmerged branch** → **amend/squash into that commit**, never a follow-up fix commit. History must read as if every commit was right first time.
- Substantial changes land via **branch + PR** so CI validates them before merge.
- Check `git diff --cached` before committing.

## Docs

- **Plain human language, written like I type.** No brand-voice or themed copy in repo docs (no "the cabinet", no `[ SYSTEM ]` status lines) — that flavour belongs in the website UI only. Dry, casual jokes in my own voice are welcome.
- **Terse.** No sections that don't earn their place, no comments restating the obvious, prefer one sentence over an example block when the sentence suffices.
- In fenced code blocks, **align all `#` comments to the same column**.
- Minimal root README (installation + root commands + package usage); package-specific detail lives in each package's own README.

## Conventions

- British English in prose, commits, comments, and identifiers.
- Bulletproof React is the style reference for structure and config — but don't copy blindly; parts of it don't apply here.
- Ask before acting on anything with a decision in it. Plan first, get approval, then execute.
- **SonarLint runs in the editor — write code that passes it.** Known traps: no `role="button"` on divs (use real semantics like `details`/`summary`), no ambiguous JSX spacing across line breaks (use explicit `{"…"}` strings).
