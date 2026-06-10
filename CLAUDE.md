# algo-arcade

An arcade of interactive algorithm visualisations. A personal learning project — each page is an **exhibit**. React + TypeScript + Vite, TanStack Router (file-based), Tailwind v4, deployed on Vercel.

## The one rule that matters

**The algorithms and the exhibit pages are my own work.** That is the entire point of the project. Claude's remit is infrastructure: tooling, routing, structure, docs, the landing page. Do not implement algorithms, do not write exhibit page content, do not "helpfully" fill in `src/algorithms/`. Build the frame, not the picture.

## Structure

```
src/
├── app/             # app.tsx (entry component), providers.tsx (renders all providers), router.ts
├── algorithms/      # pure TypeScript, no React imports — one directory per algorithm
├── routes/          # file-based routes; routeToken is "_layout"
│   ├── __root.tsx   # outlet + devtools only
│   ├── index.tsx    # landing page (exhibit list lives here as a const for now)
│   └── exhibit/     # exhibit pages; exhibit/_layout.tsx wraps everything in the dir
└── main.tsx         # entry point (main.css is the css entry)
```

- **Route files follow TanStack's standard pattern**: `export const Route = createFileRoute(...)` with the component declared as a function below, passed by name (`component: RouteComponent`). The root route may inline its component. Route files stay **thin** — the component composes imported pieces (page chrome, the algorithm component); page innards don't live in `routes/`.
- `react-refresh/only-export-components` is configured for route files with `extraHOCs: ["createFileRoute", "createRootRoute"]` so the Route export passes on the current plugin version. Caveat from the plugin author (v0.5.0 release notes): route-file HMR degrades once route options gain non-component props (loaders, search validation) — if a route grows those, move its component to its own file.
- **No shared layout components.** Page chrome is written per page; the only layout file is `exhibit/_layout.tsx`.
- **Named exports only** (`import/no-default-export`), except `*.config.ts` where tools require default exports.
- Imports use the `@/` alias. Files are kebab-case.

## Tooling split

- **Prettier owns all formatting**, including import sort (trivago plugin) and Tailwind class sort (via `prettier-plugin-merge`). Config in `.prettierrc` — no editorconfig.
- **ESLint owns quality**: unicorn (recommended, `prevent-abbreviations` with an allowList), import-x (registered under the `import` namespace), react-hooks, react-refresh. `eslint-config-prettier` last.
- **Hooks**: commitlint (conventional commits) on commit-msg; `lint-staged --quiet` on pre-commit (`--quiet` so failures print only the actual errors).

## Componentry & theming

- **daisyUI 5** is the component library — class-based components (`btn`, `card`, `badge`, …), configured via `@plugin "daisyui"` in `src/main.css`. Its official Claude skill lives at `.claude/skills/daisyui/SKILL.md` (vendored from daisyui.com/llms.txt — refresh it when bumping daisyUI).
- Themes: `light`, `dark`, `synthwave`, plus `system` (resolves to light/dark by OS preference). daisyUI switches on the `data-theme` attribute set by the zustand theme lib in `src/lib/theme/` (from `nednella/sanity`). Adding a theme means updating **both** the daisyUI themes config and the `Theme` union in `src/lib/theme/types.d.ts`; the switcher (`src/components/theme-switcher.tsx`) builds its list from that union.
- Style with daisyUI semantic colours (`base-100`, `base-content`, `primary`, …), never hardcoded palette classes (`neutral-*`) — those ignore theme switches.

## Commits

- Conventional, enforced by commitlint. Scaffold/tooling = `chore:`, user-facing = `feat:`, docs name the exact file (`docs: add README.md`).
- **One thing introduced = one commit**, including its integration glue (e.g. `eslint-config-prettier` belongs with the prettier commit).
- Mistake introduced by a recent unpushed commit → **amend/squash into that commit**, never a follow-up fix commit.
- Check `git diff --cached` before committing.

## Conventions

- British English in prose, commits, comments, and identifiers.
- `nednella/sanity` (`apps/web`) is the style reference for structure and config — but don't copy blindly; parts of it (shadcn token CSS, for example) don't apply here.
- Ask before acting on anything with a decision in it. Plan first, get approval, then execute.
