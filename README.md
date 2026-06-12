<div align="center">
  <h3><b>algo·arcade</b></h3>
  <p>
    An arcade of interactive algorithm visualisations.
  </p>
  <p>
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
    <img alt="React" src="https://img.shields.io/badge/React-087EA4?style=flat-square&logo=react&logoColor=white" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
    <img alt="daisyUI" src="https://img.shields.io/badge/daisyUI-1AD1A5?style=flat-square&logo=daisyui&logoColor=white" />
    <img alt="pnpm" src="https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white" />
  </p>
</div>

## Installation

Requires [Node 24+](https://nodejs.org) (pinned in `.nvmrc`) and [pnpm](https://pnpm.io/installation).

```bash
git clone git@github.com:nednella/algo-arcade.git
cd algo-arcade
pnpm install
```

## Development

Everything runs from the repo root:

```bash
pnpm dev          # start the app dev server
pnpm build        # build the app for production
pnpm preview      # serve the production build locally
pnpm typecheck    # check types across every package
pnpm lint         # check lint rules across every package
pnpm lint:fix     # fix lint violations across every package
pnpm format       # check formatting across every package
pnpm format:fix   # fix formatting across every package
```

## Packages

Each package defines its own scripts and declares its own dependencies. The easiest way to work on one is to `cd` into it — pnpm then runs that package's scripts and installs into that package's `package.json`:

```bash
cd app
pnpm dev             # start the dev server (app only)
pnpm add <pkg>       # add a dependency
pnpm add -D <pkg>    # add a dev dependency
pnpm remove <pkg>    # remove a dependency
```

Anything a package can do is also reachable from the repo root with `--filter`:

```bash
pnpm --filter @algo-arcade/app dev          # run a package script from the root
pnpm --filter @algo-arcade/app add <pkg>    # install into a package from the root
pnpm --filter ./app dev                     # filter by directory instead of name
```
