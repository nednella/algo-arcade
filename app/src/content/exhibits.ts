export type CategorySlug = "pathfinding-graphs" | "sorting-searching" | "physics-simulation";

export type ExhibitStatus = "live" | "soon";

export interface Category {
  slug: CategorySlug;
  title: string;
}

export interface Exhibit {
  slug: string;
  title: string;
  blurb: string;
  category: CategorySlug;
  status: ExhibitStatus;
}

export const categories: Category[] = [
  { slug: "pathfinding-graphs", title: "Pathfinding & Graphs" },
  { slug: "sorting-searching", title: "Sorting & Searching" },
  { slug: "physics-simulation", title: "Physics & Simulation" }
];

/** display number = position in this list — keep it grouped by category so numbers read sequentially */
export const exhibits: Exhibit[] = [
  {
    slug: "pathfinding",
    title: "Pathfinding",
    blurb: "Generate a maze or draw your own walls, then watch pathfinding algorithms race to solve it.",
    category: "pathfinding-graphs",
    status: "soon"
  },
  {
    slug: "travelling-salesman",
    title: "Travelling salesman",
    blurb: "Plot a route around the UK's cities and watch it untangle toward the shortest tour.",
    category: "pathfinding-graphs",
    status: "soon"
  },
  {
    slug: "sorting",
    title: "Sorting",
    blurb: "Watch several sorting algorithms race through the same data at once.",
    category: "sorting-searching",
    status: "soon"
  },
  {
    slug: "searching",
    title: "Searching",
    blurb: "Hunt the same target through messy, sorted and indexed data side by side.",
    category: "sorting-searching",
    status: "soon"
  },
  {
    slug: "fluid-sim",
    title: "Fluid simulation",
    blurb: "Drag your cursor through a field of fluid and watch the vortices bloom.",
    category: "physics-simulation",
    status: "soon"
  },
  {
    slug: "n-body",
    title: "N-body orbits",
    blurb: "Fling planets around a star and let gravity do the choreography.",
    category: "physics-simulation",
    status: "soon"
  }
];

export function exhibitNumber(exhibit: Exhibit): string {
  return String(exhibits.findIndex((entry) => entry.slug === exhibit.slug) + 1).padStart(3, "0");
}
