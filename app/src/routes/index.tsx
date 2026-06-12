import { createFileRoute } from "@tanstack/react-router";

import { ThemeSwitcher } from "@/components/theme-switcher";

export const Route = createFileRoute("/")({
  component: RouteComponent
});

interface Exhibit {
  slug: string;
  title: string;
  description: string;
  status: "live" | "soon";
}

const exhibits: Exhibit[] = [
  {
    slug: "pathfinding",
    title: "Pathfinding",
    description: "Watch Dijkstra and A* search a grid you can draw walls onto.",
    status: "soon"
  },
  {
    slug: "boids",
    title: "Boids",
    description: "Flocking behaviour from three simple rules: separation, alignment, cohesion.",
    status: "soon"
  },
  {
    slug: "sorting",
    title: "Sorting race",
    description: "Bubble, merge and quick sort racing over the same shuffled data.",
    status: "soon"
  },
  {
    slug: "game-of-life",
    title: "Game of Life",
    description: "Conway's cellular automaton — paint cells and let the generations run.",
    status: "soon"
  },
  {
    slug: "maze-generation",
    title: "Maze generation",
    description: "Recursive backtracking and Prim's carving perfect mazes before your eyes.",
    status: "soon"
  },
  {
    slug: "mandelbrot",
    title: "Mandelbrot",
    description: "Zoom into the fractal and watch the escape-time algorithm paint it.",
    status: "soon"
  }
];

function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-col">
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
        <div className="flex justify-end">
          <ThemeSwitcher />
        </div>
        <section>
          <h1 className="font-mono text-4xl font-bold tracking-tight">algo·arcade</h1>
          <p className="text-base-content/70 mt-3 max-w-xl">An arcade of interactive algorithm visualisations.</p>
        </section>
        <section className="mt-14">
          <h2 className="text-base-content/60 text-sm font-semibold tracking-widest uppercase">Exhibits</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {exhibits.map((exhibit) => (
              <li
                key={exhibit.slug}
                className="border-base-300 rounded-lg border p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium">{exhibit.title}</h3>
                  <span className="badge badge-ghost badge-sm whitespace-nowrap">
                    {exhibit.status === "live" ? "live" : "coming soon"}
                  </span>
                </div>
                <p className="text-base-content/70 mt-2 text-sm">{exhibit.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
