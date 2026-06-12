import { Crosshairs } from "@/components/crosshairs";
import { type Exhibit, exhibitNumber } from "@/content/exhibits";

interface ExhibitPlaceholderProps {
  exhibit: Exhibit;
}

export function ExhibitPlaceholder({ exhibit }: ExhibitPlaceholderProps) {
  return (
    <div className="mx-auto max-w-2xl py-10 sm:py-16">
      <p className="font-display text-primary text-sm">{exhibitNumber(exhibit)}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">{exhibit.title}</h1>
      <p className="text-base-content/60 mt-3">{exhibit.blurb}</p>
      <div className="border-base-300 relative mt-10 border border-dashed p-12 text-center">
        <span
          aria-hidden="true"
          className="text-base-content/30"
        >
          <Crosshairs />
        </span>
        <p className="text-warning font-mono text-xs tracking-[0.2em]">● UNDER CONSTRUCTION</p>
        <p className="text-base-content/50 mt-3 font-mono text-[11px] tracking-wider">
          this machine is being hand-built — check back soon
        </p>
      </div>
    </div>
  );
}
