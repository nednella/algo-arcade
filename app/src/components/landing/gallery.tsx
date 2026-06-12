import { Link } from "@tanstack/react-router";

import { Container } from "@/components/container";
import { Crosshairs } from "@/components/crosshairs";
import { type Exhibit, categories, exhibitNumber, exhibits } from "@/content/exhibits";
import { cn } from "@/lib/utils";

export function ExhibitGallery() {
  return (
    <section
      id="exhibits"
      className="w-full flex-1 py-16 sm:py-20"
    >
      <Container>
        {categories.map((category, categoryIndex) => {
          const categoryExhibits = exhibits.filter((exhibit) => exhibit.category === category.slug);

          return (
            <section
              key={category.slug}
              className="mb-14 last:mb-0"
            >
              <div className="border-base-300 flex items-baseline gap-4 border-b pb-3">
                <span className="font-display text-primary text-sm">{String(categoryIndex + 1).padStart(2, "0")}</span>
                <h2 className="text-sm tracking-[0.18em] uppercase">{category.title}</h2>
                <span className="text-base-content/50 ml-auto font-mono text-[11px]">
                  {categoryExhibits.length} {categoryExhibits.length === 1 ? "exhibit" : "exhibits"}
                </span>
              </div>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {categoryExhibits.map((exhibit) => (
                  <ExhibitCard
                    key={exhibit.slug}
                    exhibit={exhibit}
                  />
                ))}
              </ul>
            </section>
          );
        })}
      </Container>
    </section>
  );
}

interface ExhibitCardProps {
  exhibit: Exhibit;
}

function ExhibitCard({ exhibit }: ExhibitCardProps) {
  const live = exhibit.status === "live";

  return (
    <li className="group border-base-300 bg-base-100 hover:border-primary/50 relative border transition-colors">
      <span
        aria-hidden="true"
        className="text-base-content/0 group-hover:text-primary pointer-events-none absolute inset-0 transition-colors"
      >
        <Crosshairs />
      </span>
      <Link
        to="/exhibit/$slug"
        params={{ slug: exhibit.slug }}
        className="block p-6"
      >
        <span className="flex items-start justify-between">
          <span className="font-display text-base-content/40 group-hover:text-primary text-xs transition-colors">
            {exhibitNumber(exhibit)}
          </span>
          <span className={cn("font-mono text-[10px] tracking-[0.2em]", live ? "text-primary" : "text-warning")}>
            {live ? "▶ PLAY" : "● SOON"}
          </span>
        </span>
        <span className="mt-5 block font-medium">{exhibit.title}</span>
        <span className="text-base-content/60 mt-2 block text-[13px] leading-relaxed">{exhibit.blurb}</span>
      </Link>
    </li>
  );
}
